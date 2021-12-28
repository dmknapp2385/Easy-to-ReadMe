const inquirer = require('inquirer');
const generateMarkdown = require('./src/generate-markdown.js');
const {writeFile, copyFile} = require('./utils/generate-site.js');


// Questions for generating readme. 
const questions =  () => {
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'title', 
            message: 'What is the Name of your project', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a title for the readme!");
                }
            }
        },
        {
            type: 'input', 
            name: 'description', 
            message: 'Write a Description of your project (required)', 
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log('Please enter a description of your project');
                }
            }
        },
        {
            type: 'confirm', 
            name: 'confirmTableContents', 
            message: 'Would you like to include a table of contents?', 
            default: false
        },        
        {
            type: 'input', 
            name: 'credits', 
            message:'Provide the credits for this project', 
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the credits for this project');
                    return false;
                }
            }
        }, 
        {
            type: 'confirm', 
            name:'confirmInstal', 
            message: 'Would you like to include directions on how to install?', 
            default: false
        }, 
        {
            type: 'input', 
            name: 'install', 
            message: 'Write installation instructions.', 
            when: ({confirmInstal}) => {
                if (confirmInstal) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type:'confirm',
            name: 'confirmBuiltWith', 
            message: 'Would you lik to include a built with section?',
            default: false
        },
        {
            type:'input', 
            name:'builtWith', 
            message:'What was the project built with',
            when: ({confirmBuiltWith}) => {
                if (confirmBuiltWith) {
                    return true;
                } else {
                    return false;
                }
            }
        },   
        {
            type: 'confirm', 
            name: 'confirmUsage', 
            message: 'Would you like to include a section about project usage?', 
            default: false
        }, 
        {
            type: 'input',
            name: 'usage', 
            message: 'What is this project used for?', 
            when: ({confrimUsage}) => {
                if (confrimUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },              
        {
            type: 'checkbox', 
            name: 'licenseBox', 
            message: 'Select one type of license to include (required)' ,
            choices: ['Opt1', 'MIT', 'OPT3', 'OPT4'], 
            validate: input => {
                if(input.length === 1) {
                    console.log(input);
                    return true;
                } else {
                    console.log('Please pick a single license');
                    return false;
                }
            }
        }
    ]); 
}


questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then (markdown => {
        return writeFile(markdown);
    })




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const fs = require('fs');
// // const { resolve } = require('path');

// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             // if there's an error, reject the Promsie and send the error to the Promise's `.catch() ` method
//             if (err) {
//                 reject(err);
//                 // return out of the function here tomake sure th Promise doesn't naccidentally execute the resolve() funtion as well. 
//                 return;
//             }
//             // if everything went well, resolve the Promise and send the successful data to the `.then() ` method
//             resolve ({
//                 ok: true, 
//                 message: 'File created!'
//             });
//         });
//     });
// }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



