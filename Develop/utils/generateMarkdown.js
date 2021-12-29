// function to return the license portion of the readme file

function renderlicense(license) {
  if(license === 'None') {
    return '';
  } else {
      let licenseobj = {};
      if (license === 'MIT') {
         licenseobj = {
          license:'MIT',
          URLBadge:'MIT-yellow', 
          URL: 'MIT'
        }
      } else if (license === 'ISC') {
         licenseobj = {
          license:'ISC',
          URLBadge:'ISC-blue', 
          URL: 'ISC'
        }
      } else if (license === 'Apache') {
        licenseobj = {
         license:'Apache 2.0',
         URLBadge:'Apache_2.0-blue', 
         URL: 'Apache-2.0'
       }
      } else if (license === 'GNU') {
        licenseobj = {
        license:'GNU GPLv3',
        URLBadge:'GPLv3-blue', 
        URL: 'gpl-3.0'
        }
      } else if (license === 'Mozilla') {
        licenseobj = {
        license:'Mozilla Public License 2.0',
        URLBadge:'MPL_2.0-brightgreen', 
        URL: 'MPL-2.0'
        }
      } else if (license === 'Perl') {
        licenseobj = {
        license:'Perl',
        URLBadge:'Perl-0298c3', 
        URL: 'Artistic-2.0'
        }
      } 
   return`## License

This project is licensed under ${licenseobj.license}.
[![License: ${licenseobj.license}](https://img.shields.io/badge/License-${licenseobj.URLBadge}.svg)](https://opensource.org/licenses/${licenseobj.URL})
`;
  }
}


// function to generate index 
const generateIndex = (confirm, data) => {
  if (!confirm) {
    return '';
  } else {
    const indexArray = []
    for (const [key] of Object.entries(data)) {
      if (key === 'builtWith') {
        indexArray.push(`
* ['Built With'](#built-with)`);
      } else {
        indexArray.push(`
* [${key}](#${key.toLowerCase})`);
      }
    }
    return`
## Table of Contents
${indexArray.join('')}
`
  }
}


// function to generat installation if wanted
const generateInstall = (confirm, data) => {
  if (confirm) {
    return`
## Installation
${data.Installation}
    `;
  } else {
    return '';
  }
}

// function to generat built with if wanted
const generateBuiltWit = (confirm, data) => {
  if (confirm) {
    const builtWithArray = data.builtWith.replace(/,/g, "").split(' ');
    const readmeArray = builtWithArray.map(element => {
      return`
* ${element.toUpperCase()}`
    })
    return`
## Built With
${readmeArray.join('')}
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
${data.Usage}
  `;
  } else {
    return '';
  }
}

// function to generate screenshot
const generateScreenshot = (confirm, data) => {
  if (confirm) {
    return`
    
![](assets/images/${data})
  `;
  } else {
    return '';
  }
}

// function to generat contributing if wanted
const generateContributing = (confirm, data) => {
  if (confirm) {
    return`
## Contribution
${data.Contribution}
  `;
  } else {
    return '';
  }
}

// function to generat deployment if wanted
const generateDeploy = (confirm, data) => {
  if (confirm) {
    return`
## Deployment

${data.Deploy}
  `;
  } else {
    return '';
  }
}

// function to generat website link if wanted
const generateLink = (confirm, data) => {
  if (confirm) {
    return`
## Website

This project can be found at ${data.Website}
  `;
  } else {
    return '';
  }
}




// function to creat the markdown 
module.exports =  data => {
  const {title, description, confirmTableContents, credits, confirmInstall, confirmBuiltWith, confirmUsage, screenshotConfirm, screenshot,  deployConfirm, linkConfirm, contributionConfirm, licenseBox, ...optional} = data; 
  return `# Title
${title}

## Description
${description}

${generateIndex(confirmTableContents, optional)}${generateInstall(confirmInstall, optional)}${generateUsage(confirmUsage, optional)}${generateScreenshot(screenshotConfirm, screenshot)}${generateBuiltWit(confirmBuiltWith, optional)}${generateContributing(contributionConfirm, optional)}${generateDeploy(deployConfirm, optional)}${generateLink(linkConfirm, optional)}
## Credits
${credits}

${renderlicense(licenseBox)}
`;
}

