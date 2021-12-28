// function to return the license portion of the readme file

function renderlicense(license) {
  if(!license) {
    return '';
  } else {
      let licenseobj = {};
      if (license[0] === 'MIT') {
         licenseobj = {
          license:'MIT',
          URLBadge:'MIT-yellow', 
          URL: 'MIT'
        }
      } else if (license[0] === 'ISC') {
         licenseobj = {
          license:'ISC',
          URLBadge:'ISC-blue', 
          URL: 'ISC'
        }
      } else if (license[0] === 'Apache') {
        licenseobj = {
         license:'Apache 2.0',
         URLBadge:'Apache_2.0-blue', 
         URL: 'Apache-2.0'
       }
      } else if (license[0] === 'GNU') {
        licenseobj = {
        license:'GNU GPLv3',
        URLBadge:'GPLv3-blue', 
        URL: 'gpl-3.0'
        }
      } else if (license[0] === 'Mozilla') {
        licenseobj = {
        license:'Mozilla Public License 2.0',
        URLBadge:'MPL_2.0-brightgreen', 
        URL: 'MPL-2.0'
        }
      } else if (license[0] === 'Perl') {
        licenseobj = {
        license:'Perl',
        URLBadge:'Perl-0298c3', 
        URL: 'Artistic-2.0'
        }
      } 
   return`## License
${licenseobj.license}
[![License: ${licenseobj.license}](https://img.shields.io/badge/License-${Llicenseobj.URLBadge}.svg)](https://opensource.org/licenses/${licenseobj.URL})
`;
  }
}


// function to generate index 
const generateIndex = (confirm, data) => {
  if (confirm) {
    return console.log("this worked kind of");
  } else {
    return '';
  }
}

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

${renderlicense(licenseBox)}
`;
}

