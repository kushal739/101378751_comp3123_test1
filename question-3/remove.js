/*STUDENT NAME - KUSHAL PATEL
STUDENT ID - 101378751
 */

//QUESTION-3 
//PART-2 remove.js file

const fs = require('fs');
const path = require('path');

// Check if Logs directory exists
//If exist ,then redirect to Logs directory

if(fs.existsSync("logs")) {
    /
    fs.readdir("logs", (err, files) => {
        // If there is any error
        if (err) throw err;

        // Transfer file into files
        for (const file of files) {
            
            // Using join() function and delete it
            const filepath = path.join("logs", file);
            fs.unlink(filepath, err => {
                // If there is any error
                if (err) throw err;
            });

            // Otherwise, Print out the file name to console
            console.log(`delete files...${file}`);
        }

        // This will remove the Logs from directory
        fs.rmdirSync("logs");
    });
}