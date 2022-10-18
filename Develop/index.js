// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require('inquirer');

const generateNotes = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of you project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide an installation if appear: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What will the project use for?",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license on the list below: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "None"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of the project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included ",
        },
        {
            type: "input",
            name: "question",
            message: "Question that I faced during the project: ",
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address: ",
        },
    ]);
};

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile("README.md", data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("README has been successfully created!")
        }
    })
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => {
            return generateNotes(answers);
        })
        .then(data => {
            return writeToFile(data);
        })
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
