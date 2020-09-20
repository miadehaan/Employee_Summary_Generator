const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render, renderManager, renderEngineer, renderIntern} = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Inputs for Manager, Engineer, & Intern
inquirer.prompt(
    [
        {
            type: "list",
            message: "Please select employee type: ",
            choices: [
                "manager", "engineer", "intern"
            ],
            name: "employeeType"
        }
    ]
).then(function(answers) {
    // if statment for employee type: manager, engineer, or intern
    if (answers.employeeType === "manager") {
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "please give manager name:",
                    name: "managerName",
                    validate: function(answer) {
                        if (answer !== "") { //managerName
                            return true;
                        }
                        return "Please enter at least character"
                    }
                },
                {
                    type: "input",
                    message: "please give manager id:",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "please give manager email:",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "please give manager office number:",
                    name: "managerOfficeNumber"
                }
            ]
        ).then(function(resp) {
            const manager = resp;
            console.log(manager);
        })
    }
    else if (answers.employeeType === "engineer"){
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "please give engineer's name:",
                    name: "engineerName",
                    validate: function(answer) {
                        if (answer !== "") { //engineerName
                            return true;
                        }
                        return "Please enter at least character"
                    }
                },
                {
                    type: "input",
                    message: "please give engineer id:",
                    name: "engineerId"
                },
                {
                    type: "input",
                    message: "please give engineer email:",
                    name: "engineerEmail"
                },
                {
                    type: "input",
                    message: "please give engineer's Github':",
                    name: "engineerGithub"
                }
            ]
        ).then(function(resp) {
            const engineer = resp;
            console.log(engineer);
        })
    }
    else if (answers.employeeType === "intern"){
        inquirer.prompt(
            [
                {
                    type: "input",
                    message: "please give intern's name:",
                    name: "internName",
                    validate: function(answer) {
                        if (answer !== "") { //internName
                            return true;
                        }
                        return "Please enter at least character"
                    }
                },
                {
                    type: "input",
                    message: "please give intern id:",
                    name: "internId"
                },
                {
                    type: "input",
                    message: "please give intern email:",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "please give intern's school':",
                    name: "internSchool"
                }
            ]
        ).then(function(resp) {
            const intern = resp;
            console.log(intern);
        })
    }


    // const managerHtml = renderManager(manager); // creates the HTML for the manager
    // const engineerHtml = renderEngineer(engineer); // creates the HTML for the engineer
    // const internHtml = renderIntern(intern); // creates the HTML for the intern
    // console.log(managerHtml, engineerHtml, internHtml);
});




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
