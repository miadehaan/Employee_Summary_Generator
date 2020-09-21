// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email); // calls the Employee class
        this.school = school;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Intern";
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;