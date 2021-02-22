// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'projectTitle',
    },
    {
        type: 'list',
        message: "What is your project's license?",
        choices: ["MIT", "Apache", "Boost", "IBM", "None"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Write a short description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm install'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'testingPurpose',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributors',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?',
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
    console.log("Readme file Generated!, no info inside yet")
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            writeToFile("README.md", "response-no info yet");
        })
}

// Function call to initialize app
init();
