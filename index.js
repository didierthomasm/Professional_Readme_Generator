// Imported modules
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const { generateMarkdown, licenseNameUrl } = require("./utils/generateMarkdown");
const { join} = require("path");


//Array of questions to pass to Inquirer
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
    choices: []
  }
];

// Function to write the readme
async function writeToFile(fileName, data) {
  await writeFile(join(process.cwd(), fileName), data);
}

// Function to initialize the app
async function init() {
  try {
    const licenses = await licenseNameUrl(); // Wait for the promise to resolve
    // to Update the 'license' question choices
    questions.find(question => question.name === 'license').choices = Object.keys(licenses);

    const response = await inquirer.prompt(questions)

    const selectedLicense = response["license"];
    response.licenseUrl = licenses[selectedLicense];

    await writeToFile('./Result/README2.md', generateMarkdown({ ...response}));
    console.log('README.md successfully generated!');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Function call to initialize app
init();