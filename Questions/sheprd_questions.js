// CS Questions:

// Every day a new frog is born weight 0grams and grows at a rate of 10grams/day, maxing out at 100grams in 10 days
// 	At the end of day n, what is the total weight of the frog community?

// Sample Input: 15
//  Num of Frogs: 15
//  Frog Weights at day 15: 
//  
//      1. 100  6.  100  11. 50
//      2. 100  7.  90   12. 40
//      3. 100  8.  80   13. 30
//      4. 100  9.  70   14. 20
//      5. 100  10. 60   15. 10
// 
//      Total: 1050 grams 
//      Avg Weight: 1050 / 15 Frogs === 70 per frog

    function findCommunityWeight(days) {
        // One is born each day
        let numberOfFrogs = days;
        let maxedFrogs = 0;
        let totalCommunityWeight = 0;
        let currentWeight;
        if (days > 10) {
            maxedFrogs = days - 9;
            totalCommunityWeight += maxedFrogs * 100;
            numberOfFrogs -= maxedFrogs;
            currentWeight = 90;
        } else {
            currentWeight = days * 10;
        }

        while(currentWeight > 0) {
            numberOfFrogs -= 1;
            totalCommunityWeight += currentWeight;
            currentWeight -= 10;
        }

        return totalCommunityWeight;
    }

// 	At the end of day n, what is the average weight of the frogs?

    function findFrogAvg(days) {
        if (days === 0) { return 0; }

        let totalCommunityWeight = findCommunityWeight(days);
        
        return Math.floor(totalCommunityWeight / days);
    }

    // JavaScript Questions:
    // 
    // Write a function appendRow that appends a table row to the table with ID "tbl". 
    // The appended row should have the same number of cells as the last row in that table.
    // For example, after appending a row to the table below, 
    // the table should have 2 rows where each row has 2 cells.
    // 
    //     <table id="tbl" border="1">
    //       <tbody>
    //         <tr>
    //           <td></td>
    //           <td></td>
    //         </tr>
    //       </tbody>
    //     </table>
    //
    
    function addRow() {
        let table = document.getElementById('tbl');

        // return the body of the table
        let tbody = Array.prototype.slice.call(table.children)[0];

        let numberOfRows = tbody.children.length;

        let lastRow = tbody.children[numberOfRows - 1];

        let numberOfCells = lastRow.children.length;
        
        let newRow = document.createElement('tr');

        while (numberOfCells > 0) {
            let td = document.createElement('td');
            newRow.appendChild(td);
            numberOfCells -= 1;
        }
        
        tbody.appendChild(newRow);
        return;
    }
    // for testing; 
    // window.addRow = addRow;

    // Write an addClickHandler function that registers a click handler and implements the following logic:															
    // When a button with id "btn" is clicked, it disappears.						
    // 1 second after the click, it reappears.

    let button = document.getElementById('btn');

    let btnDisappear = button.addEventListener('click', () => {
        button.style = "display: none";
        setTimeout(() => {
            button.style = "display: block";
        }, 1000);
    });
    

    // Write a function that removes all items that are not numbers from the array. 
    // The function should modify the existing array, not create a new one.															
    // For example, if the input array contains values [1, 'a', 'b', 2], after processing, 
    // the array will contain only values [1, 2].


    function onlyNumbers(arr) {
        // the function pushes to the back integers/floats it finds
        // while shifting off non-numbers.  Runs in O(n) time with O(1) space

        let count = arr.length;

        while (count > 0) {
            let curr = arr[0];
            // handles both integers and floats
            if (Number(curr) === curr && (curr % 1 === 0) || 
                Number(curr) === curr && curr % 1 !== 0 ) {

                arr.push(arr.shift());
            } else {
                arr.shift();
            }
            count -= 1;
        }
        return arr;
    }

    // window.onlyNumbers = onlyNumbers;



    