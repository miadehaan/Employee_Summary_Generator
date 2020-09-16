// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Manager extends Employee { // manager has employee properties & methods
    constructor(name, id, email) {
        super(name, id, email); // this creates new Employee(name, id, email)
        this.officeNumber = officeNumber;
    
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;