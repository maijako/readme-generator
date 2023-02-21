const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a short description of your project:',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'Please enter installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input', 
        message: 'Please enter installation instructions for your project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage recommendation for your project.',
        name: 'usage'
    },
    {
        type: 'list', 
        message: 'Please select the license type for your project.',
        name: 'license',
        choices: ['Artistic license 2.0', 'Educational Community License v2.0', 
        'MIT', 'Boost Software License 1.0', 'IBM Public License Version 1.0', 'ISC']
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
