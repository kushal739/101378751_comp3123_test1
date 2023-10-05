/*STUDENT NAME - KUSHAL PATEL
STUDENT ID - 101378751
 */

//QUESTION-3 
//PART-1 add.js file
 
const fs = require('fs');


//  Creating log directory
//Using if ,else condition , if exists print log else it will going to make new directory

if(!fs.existsSync("logs")) {

    fs.mkdirSync("logs");
}

// Changing to log directory 
 process.chdir("logs");

// Creating  10 log files 

for(let i = 0; i < 10; i++) {
    
    const fileName = `log${i}.txt`;

    fs.writeFile(fileName, 'some text', (err) => {
        // If there is any error in writing the file
        if (err) {
            // Throw the error
            throw err;
        }
    });

    // Output file name to console
    console.log(fileName);
}