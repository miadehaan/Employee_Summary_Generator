// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee { // manager has employee properties & methods
    constructor(name, id , email, officeNumber) {       
        super(name, id, email); // this creates new Employee(name, id, eamil)
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Manager";
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;