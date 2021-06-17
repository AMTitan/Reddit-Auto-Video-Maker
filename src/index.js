// requires
require("dotenv").config();
const ffmpeg = require('ffmpeg');
const { createCanvas, loadImage } = require('canvas');
const fs = require("fs");
const request = require('request');

// See if .env file exists
try {
    if(fs.existsSync('.env')) {
        // It exists dont need to do anything
        console.log("The file exists dont need to make it.");
    } else {
        // It does not exists
        console.log('The file does not exist so trying to make it.');
        // Making file
        fs.writeFileSync('.env', "# All url files can be local files just put the file in the root directory of this program and put the name like sample.png\nReddit=(example entitledparents)\nBackgroundImage=(example https://i.imgur.com/igiMj39.jpeg)\nComments=(example 1)\nBetweenClips=(example https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4)\nNumberOfClips=(example 20)", function (err) {
            if (err) {
                console.error(err);
                // If file not made stop program
                process.exit(1);
            }
        })
        // File made
        console.log(".env file made");
        // Tell user what to do
        console.log("\nUse any file editor you want and edit the file called \".env\" and replace the brackets")
        // Stopping program
        process.exit(1);
    }
    // Get json of page
    request(`https://www.reddit.com/r/${process.env.Reddit}/hot.json`, function(error, response, body) {
        // If it failed
        if (!(!error && response.statusCode == 200)) {
            // Tell user that it failed
            console.log(`I am sorry but it failed \nError code: ${response.statusCode}\nError: ${error}`);
            // Stopping program
            process.exit(1);
        }
        // If it did not fail get the json
        const json = JSON.parse(body);
    })
    //Make video
} catch (err) {
    console.error(err);
}