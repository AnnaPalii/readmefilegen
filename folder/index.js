const inquirer = require("inquirer");
const generateMarkdown = require ("./folder/generateMarkdown") 

const questions = [
    {message:"What is your name?",
     name: "name"},
     {message:"What is your project name?",
     name: "title"
     }
];

// Function to write README file
function writeToFile (fileName,data) {

}

// Function to initialize program 
function init () {
    inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
    });

    console.log("After questions!")

    const markdown = generateMarkdown(answers);
    console.log(markdown);

    // save string to a .md file 
}

// function call
init(); 