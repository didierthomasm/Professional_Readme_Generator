const axios = require('axios');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    const base_url = 'https://img.shields.io/badge/License-';
    const formattedLicense = license.replace(/\s/g, '%20').replace(/\//g, '%20');
    return `${base_url}${formattedLicense}-blue.svg`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  let licenses = [];
  if (!license) {
    return '';
  } else {
    async function fetchDataFromAPI() {
      try {
        const response = await axios.get(`https://api.github.com/licenses`);
        return  response.data; // Get the response data
      } catch (error) {
        throw error;
      }
    }

    try {
      const licenseData = await fetchDataFromAPI();
      // Process the license data as needed
      for (const license of licenseData) {
        licenses.push(license.url)
        console.log(license.url);
      }
      return licenses;
    } catch (error) {
      console.error('Error fetching license data:', error.message);
      return null;
    }
  }
}

renderLicenseLink('MIT').then(r => {});

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

module.exports = generateMarkdown;
