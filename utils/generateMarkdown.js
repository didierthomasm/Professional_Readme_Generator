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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {generateMarkdown, licenseNameUrl};