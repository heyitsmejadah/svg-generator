const fs = require('fs');
const inquirer = require('inquirer');

const fileName = "logo.svg";

const questions = [
    {
        name: "shape",
        message: "Choose a shape for your logo:",
        type: "list",
        choices: ["Square","Circle","Triangle"]
    },
    {
        name: "color",
        message: "Choose a color for your logo:",
        type: "list",
        // make it to where user can input any color or hex number
        choices: ["Red","Orange","Yellow","Green","Blue","Purple","Black","White"]
    },
    {
        name: "text",
        message: "Choose three letters to include in your logo:",
        type: "input",
    },
    {
        name: "text-color",
        message: "Choose a color for your text:",
        type: "list",
        choices: ["Red","Orange","Yellow","Green","Blue","Purple","Black","White"]
    }
];

// Function to write logo file
function createLogo (fileName, data) {
    const svgTemplate = ``;
    const svgContentArray = [svgTemplate];
    svgContentArray.push(``);

    return fs.writeFile(fileName, jsonFormat(data), (err) =>
    err ? console.error(err) : console.log('Logo created!')
)};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const jsonData = jsonFormat(data);
        createLogo("logo.svg", jsonData);
    });
}

// Function to format data
function jsonFormat(data) {
    const jsonDataString = JSON.stringify(data, null, 2);
    fs.writeFileSync('output.json', jsonData);
    console.log('Data hs been written to output.json');
}

// Initialize app
init();
createLogo(fileName,questions);