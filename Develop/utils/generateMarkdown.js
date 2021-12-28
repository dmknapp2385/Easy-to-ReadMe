// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// function to generate index 
const generateIndex = index => {
  if (index) {
    return`
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    `

  } else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
module.exports =  data => {
  const {title, description, confirmTableContents, crdits, confirmInstal, confirmBuiltWith, confirmUsage, licenseBox, ...optional} = data; 
  return `# ${title}

## ${description}


${genearateIndex(confirmTableContents)}
${generateInstall(data.install)}
${generateUsage(data.usage)}

  
  ## Description
 
  
  ## Credits

  ## License`;
}

