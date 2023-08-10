// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {generateMarkdown, licenseNameUrl} = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run test?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does the project should have?',
    choices: [licenseNameUrl().then(license => {
      Object.keys(license);
    })],
    validate: (communication) => {
      if (!communication.length) {
        return 'Choose at least one';
      }
      return true;
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
