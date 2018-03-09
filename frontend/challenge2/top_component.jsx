import React from 'react';
import FormInput from './form_input';
import MileageDisplay from './mileage_display';
import axios from 'axios';

class TopComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            miles: "",
            zipCodeOne: null,
            zipCodeTwo: null,
            errors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getZipData = this.getZipData.bind(this);
        this.calculateDistance = this.calculateDistance.bind(this);
        this.usZipCodeValidator = this.usZipCodeValidator.bind(this);
    }

    async getZipData(code) {
        
        // using axios to get data from CSV
       return await axios.get('frontend/challenge2/database/free-zipcode-database-Primary.csv', {})
            .then(res => processData(res.data));

        // return find row containing zip and returns lat/long  
        function processData(allText) {
            var allTextLines = allText.split(/\r\n|\n/);
            var entries = allTextLines[0].split(',');
        
            let idx = 1;
            while (idx < allTextLines.length) {
                let row = allTextLines[idx].split(',');
                if (row[0] === code) {
                    return [row[5], row[6]];
                }
                idx += 1;
            }
            return null;
        }
    }

    usZipCodeValidator(zip1, zip2) {
        // validates that input contains 5 digits
        let validator = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return zip1 && zip2 && zip1.match(validator) && zip2.match(validator);
    }

    async handleSubmit(e) {
        e.persist();
        e.preventDefault();

        // reteiving inputs from form
        let zip1 = e.target.firstChild.value;
        let zip2 = e.target.children[1].value;
        
        if (this.usZipCodeValidator(zip1, zip2)) {
            let coord1;
            let coord2;
            
            let call1 = await this.getZipData(zip1).then(res => { coord1 = res });
            let call2 = await this.getZipData(zip2).then(res => { coord2 = res });

            if (coord1 && coord2) {
                // if 2 valid sets of coordinates are returned
                // from the async calls then we calculate the distance
                let distance = this.calculateDistance(coord1, coord2);
                
                this.setState({ zipCodeOne: zip1, 
                                zipCodeTwo: zip2, 
                                errors: "",
                                miles: distance });    
            } else {
                // if coord1 and coord2 are not true
                // then calls failed to retreive 2 valid zips
                this.setState({ zipCodeOne: null, 
                                zipCodeTwo: null,
                                errors: "Invalid Zip Code. Please Try Again",
                                miles: null });
            }

        } else if ((zip1 && !zip2) || (!zip1 && zip2)) {
            // if users leave 1 zip input blank
            this.setState({ zipCodeOne: null, 
                            zipCodeTwo: null,
                            errors: "Please Enter 2 Zip Codes. Please Try Again",
                            miles: null });
        } else {
            // clears form if both inputs are blank
            this.setState({ zipCodeOne: null, 
                            zipCodeTwo: null, 
                            errors: "",
                            miles: ""});
        }
        e.target.reset();
    }


    calculateDistance(coord1, coord2) {
        
        // credit for formula goes to:
        /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
        /* Latitude/longitude spherical geodesy tools                         (c) Chris Veness 2002-2017  */
        /*                                                                                   MIT Licence  */
        /* www.movable-type.co.uk/scripts/latlong.html                                                    */
        /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
        
        let earthRadius = 6371;
        
        let lat1 = parseFloat(coord1[0]);
        let lon1 = parseFloat(coord1[1]);

        let lat2 = parseFloat(coord2[0]);
        let lon2 = parseFloat(coord2[1]);

        let dLat = (lat2 - lat1) * (Math.PI/180);
        let dLon = (lon2 - lon1) * (Math.PI/180);
        lat1 = lat1 * (Math.PI/180);
        lat2 = lat2 * (Math.PI/180);

        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * 
                Math.cos(lat1) * Math.cos(lat2);

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        let d = earthRadius * c;
        
        // converts from KM to Miles
        return Math.round(d * 0.6213712);
    }


    render() {
        return (
            <div id="top-container">
                <FormInput submit={this.handleSubmit}/>
                <MileageDisplay miles={this.state.miles} 
                                zipCodeOne={this.state.zipCodeOne}
                                zipCodeTwo={this.state.zipCodeTwo}
                                errors={this.state.errors}/>
            </div>
        );
    }
}

export default TopComponent;