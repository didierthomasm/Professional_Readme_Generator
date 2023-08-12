const axios = require('axios');
//Function that makes the badge of the license
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    const base_url = 'https://img.shields.io/badge/License-';
    const formattedLicense = license.replace(/\s/g, '%20').replace(/\//g, '%20');
    return `${base_url}${formattedLicense}-blue.svg`;
  }
}

//Function that returns a promise with URL and licenses names
async function licenseNameUrl() {
  let licenses = {'None': ''};
  try {
    const response = await axios.get(`https://api.github.com/licenses`);
    for (const license of response.data) {
      licenses[license.name] = license.url;
    }
    return  licenses; // Get the response data
  } catch (error) {
    throw error;
  }
}

// Function that returns a string for the readme
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install the necessary dependencies, run:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the terms of the [${data.license} License](${data.licenseUrl}).
  ![License Badge](${renderLicenseBadge(data.license)})
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, use:
  \`\`\`
    ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions or need further assistance, feel free to reach out:
  
  - [GitHub](https://github.com/${data.github})
  - ${data.email}
  
  ---
  
  This README was generated with ❤️ using the Awesome README Generator.
  
  ---

`;
}

module.exports = {generateMarkdown, licenseNameUrl};