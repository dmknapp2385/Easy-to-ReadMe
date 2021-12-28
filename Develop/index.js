const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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
            message:'Provide the credits for this project: ', 
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
            message:'What was the project built with?',
            when: ({confirmBuiltWith}) => {
                if (confirmBuiltWith) {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },              
        {
            type: 'checkbox', 
            name: 'licenseBox', 
            message: 'Select one type of license to include' ,
            choices: ['Apache', 'Boost', 'BSD', 'GNU', 'MIT', 'Mozilla', 'ISC'], 
            validate: input => {
                if(input.length > 1) {
                    console.log('Please pick a single license');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]); 
}


questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(reademe => {
        return writeFile(reademe);
    })
    .then(resolvemsg => {
        console.log(resolvemsg.message);
    })



// TODO: Create a function to write README file
const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readMe.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true, 
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



