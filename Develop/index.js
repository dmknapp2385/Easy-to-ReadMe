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
            name:'confirmInstall', 
            message: 'Would you like to include directions on how to install?', 
            default: false
        }, 
        {
            type: 'input', 
            name: 'Installation', 
            message: 'Write installation instructions.', 
            when: ({confirmInstall}) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type:'confirm',
            name: 'confirmBuiltWith', 
            message: 'Would you like to include a built with section?',
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
            message: 'Would you like to include a usage section?', 
            default: false
        }, 
        {
            type: 'input',
            name: 'Usage', 
            message: 'How do you use this application?', 
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },  
        {
            type: 'confirm', 
            name: 'screenshotConfirm', 
            message: 'Would you like to include an image of the project?', 
            default: true
        }, 
        {
            type:'input', 
            name: 'screenshot', 
            message: 'Please write the name of the file as it appears in the image folder',
            when: ({screenshotConfirm}) => {
                if (screenshotConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'confirm', 
            name: 'deployConfirm', 
            message: 'Would you like to provide information on deployment this project?', 
            default: false
        }, 
        {
            type:'input', 
            name: 'Deploy', 
            message: 'Provide information on how to deploy with this application.',
            when: ({deployConfirm}) => {
                if (deployConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'confirm', 
            name: 'linkConfirm', 
            message: 'Would you like to providie a website url link for this project?', 
            default: false
        }, 
        {
            type:'input', 
            name: 'Website', 
            message: 'Write the url as it appears in the browser.',
            when: ({linkConfirm}) => {
                if (linkConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'confirm', 
            name: 'contributionConfirm', 
            message: 'Would you like to providie information about how to contribute to this project?', 
            default: false
        }, 
        {
            type:'input', 
            name: 'Contribution', 
            message: 'Provide information on how to contribute.',
            when: ({contributionConfirm}) => {
                if (contributionConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'confirm', 
            name: 'testsConfirm', 
            message: 'Would you like to providie information on how to test the project?', 
            default: false
        }, 
        {
            type:'input', 
            name: 'Tests', 
            message: 'Provide information on how to test.',
            when: ({testsConfirm}) => {
                if (testsConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type:'input', 
            name: 'questionsUsername', 
            message: 'Provide your github username.',
            validate: input => {
                if (!input) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:'input', 
            name: 'questionsEmail', 
            message: 'Provide your email.',
            validate: input => {
                if (!input) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list', 
            name: 'licenseBox', 
            message: 'Select one type of license to include' ,
            choices: ['Apache', 'GNU', 'MIT', 'Mozilla', 'ISC', 'Perl', 'None'], 
            default: 'None'
            
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



// function to write README file
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




