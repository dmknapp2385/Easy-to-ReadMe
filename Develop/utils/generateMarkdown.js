// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// function to generate index 
// const generateIndex = (confirm, data) => {
//   if (confirm) {
//     return console.log("this worked kind of");
//   } else {
//     return '';
//   }
// }

// function to generat installation if wanted
const generateInstall = (confirm, data) => {
  if (confirm) {
    return`
## Installation
${data.install}
    `;
  } else {
    return '';
  }
}

// function to generat built with if wanted
const generateBuiltWit = (confirm, data) => {
  if (confirm) {
    return`
## Built With
${data.builtWith}
    `;
  } else {
    return '';
  }
}

// function to generat usage if wanted
const generateUsage = (confirm, data) => {
  if (confirm) {
    return`
## Usage
${data.usage}
  `;
  } else {
    return '';
  }
}


// function to creat the markdown 
module.exports =  data => {
  const {title, description, confirmTableContents, credits, confirmInstal, confirmBuiltWith, confirmUsage, licenseBox, ...optional} = data; 
  return `
# Title
${title}

## Description
${description}

{generateIndex(confirmTableContents, optional)}
${generateInstall(confirmInstal, optional)}
${generateBuiltWit(confirmBuiltWith, optional)}
${generateUsage(confirmUsage, optional)}

## Credits
${credits}

## License
${licenseBox}
`;
}

