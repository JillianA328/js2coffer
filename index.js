// Added inquirer package
const inquirer = require("inquirer");
const fs = require('fs');

// User questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name'
        },

        {
            type: 'input',
            message: 'Please write a description of your project:',
            name: 'description'
        },

        {
            type: 'input',
            message: 'Please give installation instructions:',
            name: 'installation'
        },

        {
            type: 'input',
            message: 'How do you use the application?',
            name: 'usage'
        },

        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributers'
        },

        {
            type: 'list',
            message: 'What licenses are used in this project?',
            name: 'license',
            choices: ['MIT', `GPL`, 'Apache', 'N/A']
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        }
    ]

).then (({
    name,
    description,
    installation,
    usage,
    contributers,
    license,
    email,
    github
})=>{
  
    const template = `# ${name}
    *[Installation](#installation)
    *[Usage](#usage)
    *[Description](#description)
    *[Contributers](#contributers)
    *[License](#license)
    *[Email](#email)
    *[GitHub](#github)

    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## Description
    ${description}
    ## Contributers
    ${contributers}
    ## License
    ${license}
    ## Email
    ${email}
    ## Github
    ${github}`;

    //function to create readme.md
    createNewFile(title, template);
}
);

//function using createNewFile
function createNewFile(name,data){

    fs.writeFile(`./$(fileName.toLowerCase().split(' ').join('')}.md',data,(err)=>){
        if(err){
            console.log(err)
        }
        console.log('Here is your README');
    })
}