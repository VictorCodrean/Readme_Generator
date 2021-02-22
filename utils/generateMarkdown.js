// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseBadge;
var licenseLink;
var licenseSection;
var contributorsNames;
function renderLicenseBadge(license) {
  if (license === "none") {
    licenseBadge = ""
  } else {
    licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license)
  renderLicenseLink(license)
  licenseSection = `${licenseBadge}(${licenseLink})`
}

// Feature regarding Contributors
// function renderContributors(contributors) {
// for (var i = 0; i < contributors.length; i++) {
//   contributorsNames = contributors[i] 
// }
// }

// Feature regarding screenshots
// function renderPictures(pictures) {
//   for (var i = 0; i < pictures.length; i++)
//     picture[i] = `![picture](${pictures[i]})`
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.license)
  // renderContributors(data.contributors)
  return `# ${data.projectTitle}


## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Description
${data.description}
   
## Installation
    ${data.installation}

## Usage
${data.testingPurpose}    

## License
The project is under

${licenseSection}

## Contributing
${data.contributors}    

## Tests
${data.testing}    
    
## Questions
Asking me any questions:

<a href="mailto:${data.email}" style="text-decoration:none"><img height="20" src = "https://img.shields.io/badge/Gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white&style=plastic"></a>

[<img height="20" src="https://img.shields.io/badge/-GitHub-black.svg?&style=for-the-badge&logo=github&logoColor=white&style=plastic"/>](https://github.com/${data.userName})
`
}

module.exports = generateMarkdown;
