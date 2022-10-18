// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
const renderLicenseBadge = (license) => {
    return `![${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
const renderLicenseLink = (license) => {
  if (license !== "None") {
    return "[License](#license)";
  } return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = (license) => {
  if (license !== `None`){
  return (
  `## License
  This project is license under the ${license} lincense`
  )}
  return ``
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  My Github: ${data.username}
  My Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
