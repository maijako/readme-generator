const fs = require("fs");
const path = require("path");
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
        message: 'Please enter usage recommendation for your project.',
        name: 'usage'
    },
    {
        type: 'list', 
        message: 'Select the license type for your project.',
        name: 'license',
        choices: ['Artistic license 2.0', 'Creative Commons Attribution 4.0', 'Educational Community License v2.0', 'GNU General Public License v3.0',
        'MIT', 'Open Software License 3.0']
    }
    {
        type: 'input', 
        message: 'Please add instructions on how users can contribute to your project.',
        name: 'contributing'
    },
    {
        type: 'input', 
        message: 'Please add test instructions for your project.',
        name: 'tests'
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'gitUserName'
    },
    {
        type: 'input', 
        message: 'What is your GitHub link?',
        name: 'gitUserLink'
    },
    {
        type: 'input', 
        message: 'What is your email address?',
        name: 'userEmail'
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
      });
}

// function call to initialize program
init();
