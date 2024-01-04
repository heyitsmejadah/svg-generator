const fs = require('fs');
const inquirer = require('inquirer');

const fileName = "logo.svg";

const questions = [
    {
        name: "text",
        message: "Choose three letters to include in your logo:",
        type: "input",
        validate: function(input) {
            return input.length === 3 ? true : "Please enter exactly 3 characters";
        }
    },
    {
        name: "textColor",
        message: "Choose a color for your text:",
        type: "input",
        choices: ["Red","Orange","Yellow","Green","Blue","Purple","Black","White"],
        validate: function(input) {
            return isValidColor(input) ? true : "Please enter a color or hex number";
        }
    },
    {
        name: "shape",
        message: "Choose a shape for your logo:",
        type: "list",
        choices: ["Square","Circle","Triangle"],
    },
    {
        name: "color",
        message: "Choose a color for your shape:",
        type: "input",
        // make it to where user can input any color or hex number
        validate: function(input) {
            return isValidColor(input) ? true : "Please enter a color or hex number";
        }
    },
];


// Function to validate color input
function isValidColor(input) {
    const colorHex = /^(#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|Red|Orange|Yellow|Green|Blue|Purple|Black|White)$/i;
    return colorHex.test(input.trim());
}

// Function to write logo file
function createLogo (fileName, data) {
    const {shape, color, text, textColor} = data;
    let svgTemplate;

    switch(shape) {
        case "Square":
            svgTemplate = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="70" width="100" height="100" fill="${color}" />
                <text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="30px" font-weight="bold">${text}</text>
            </svg>`;
            break;
        case "Circle":
            svgTemplate = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="100" r="50" fill="${color}" />
                <text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="30px" font-weight="bold">${text}</text>
            </svg>`;
            break;
        case "Triangle":
            svgTemplate = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,50 100,150 200,150" fill="${color}" />
                <text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="30px" font-weight="bold">${text}</text>
            </svg>`;
            break;
        default:
            console.error("Invalid Shape");
            return;
    }

    fs.writeFile(fileName, svgTemplate, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
)};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        // clone data object
        const jsonData = {...data};
        createLogo(fileName, jsonData);
    });
}

// Initialize app
init();