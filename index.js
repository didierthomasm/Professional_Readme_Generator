// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const {generateMarkdown, licenseNameUrl} = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const list = licenseNameUrl().then(license => {
  console.log(Object.keys(license))
  return Object.keys(license);
})
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
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does the project should have?',
    choices: [list],
    validate: (license) => {
      if (!license.length) {
        return 'Choose at least one';
      }
      return true;
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((inquirerResponse) => {
      console.log(inquirerResponse);
    })
}

// Function call to initialize app
init();
