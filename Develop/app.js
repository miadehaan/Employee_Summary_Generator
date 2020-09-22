const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve("./", "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render} = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamMembers = [];

// Capitalize first letter of team member's names
function jsUcfirst(string) {
    let nameArray = string.split(" "); // create array of first & last name
    // console.log(nameArray);

    let fullName = nameArray.map( (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); // capitalize first letter
    });
    
    return fullName.join(" "); // change array back to one string
}

// Inputs for Manager, Engineer, & Intern
function appMenu() {

    // Manager Questions:
    function createManager() {
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
                    return "Please enter at least one character"
                }
            },
            {
                type: "input",
                message: "please give manager id:",
                name: "managerId",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            },
            {
                type: "input",
                message: "please give manager email:",
                name: "managerEmail",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email"
                }
            },
            {
                type: "input",
                message: "please give manager office number:",
                name: "managerOfficeNumber",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a phone number"
                }
            }
        ]).then( (resp) => {
            const manager = new Manager(jsUcfirst(resp.managerName), resp.managerId, resp.managerEmail, resp.managerOfficeNumber);
            // console.log(manager);
            // add manager to teamMembers array
            teamMembers.push(manager);

            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt(
        [{
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                break;
                case "Intern":
                    addIntern();
                break;
                default:
                    buildTeam();
            }   
        });
    }

    // Questions for engineer
    function addEngineer() {
        inquirer.prompt([
            // engineer questions go here
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
                name: "engineerId",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            },
            {
                type: "input",
                message: "please give engineer email:",
                name: "engineerEmail",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email"
                }
            },
            {
                type: "input",
                message: "please give engineer's Github':",
                name: "engineerGithub",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            }
        ]).then(resp => {
            const engineer = new Engineer(jsUcfirst(resp.engineerName), resp.engineerId, resp.engineerEmail, resp.engineerGithub);
            // console.log(engineer);
            // add engineer to teamMembers array
            teamMembers.push(engineer);

            createTeam();
        });
    }

    // Questions for intern
    function addIntern() {
        inquirer.prompt([
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
                name: "internId",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character"
                }
            },
            {
                type: "input",
                message: "please give intern email:",
                name: "internEmail",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email"
                }
            },
            {
                type: "input",
                message: "please give intern's school:",
                name: "internSchool",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a school"
                }
            }
        ]).then(resp => {
            // do something with answers, make new Intern()
            // add intern to teamMembers array
            const intern = new Intern(jsUcfirst(resp.internName), resp.internId, resp.internEmail, resp.internSchool);
            // console.log(intern);
            teamMembers.push(intern);

            createTeam();
        });
    }

    function buildTeam() {
        console.log(teamMembers);

        // build html files from teamMembers array
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
        
    createManager();
}

appMenu();


//----------------------

//     else if (answers.employeeType === "Intern"){
//         inquirer.prompt(
//             [
            
//             ]
//         ).then(function(resp) {
            
//             const internHtml = renderIntern(intern); // creates the HTML for the intern
//             console.log(internHtml);
//         })


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
