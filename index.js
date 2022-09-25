// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install your application.",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use your application.",
  },
  {
    type: "input",
    name: "contributing",
    message: "How do you want to contribute to your application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How to test your application.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to apply?",
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const generatedReadme = generateMarkdown(answers);
    console.log(generatedReadme);
    fs.writeFile("./readme.md", generatedReadme, () => {
      console.log("finished");
    });
  });
}

// Function call to initialize app
init();
