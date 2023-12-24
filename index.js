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
    const {shape, color, text, "text-color": textColor} = data;
    const svgTemplate = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} cx="100" cy="100" r="50" fill="${color}" />
    <text x="100" y="110" text-anchor="middle" fill="${textColor}" font-size="30px" font-weight="bold">${text}</text>
    </svg>
    `;

    fs.writeFile(fileName, svgTemplate, (err) =>
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
    fs.writeFileSync('output.json', jsonDataString);
    console.log('Data hs been written to output.json');
    return data;
}

// Initialize app
init();