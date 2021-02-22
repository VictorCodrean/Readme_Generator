// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the project?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Write a short description of your project.',
        name: 'description'
    },
    //  As a feature
    //  {
    //     type: 'input',
    //     message: 'Write a detailed description of your project if you wish',
    //     name: 'description'
    // },
    //  As a feature
    //  {
    //     type: 'list',
    //     message: 'Do you want your Readem to include screenshots?',
    //     choices: ["Yes", "No"],
    //     name: 'screenshot'
    // },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm install'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'testingPurpose'
    },
    {
        type: 'list',
        message: "What is your project's license?",
        choices: ["MIT", "Apache%202.0", "MPL%202.0", "ISC", "odbl", "None"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributors to the repo?',
        name: 'contributors'
    },
    {
        type: "input",
        message: "What are the testing instructions for your project?",
        name: "testing"
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userName'
    },
    {
        type: 'email',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
    console.log("Readme file Generated!")
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            writeToFile("README.md", generateMarkdown(response));
        })
}

// Function call to initialize app
init();
