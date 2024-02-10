// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Define Manager class with inheritance from Employee and additional property for officeNumber
const Employee = require("./Employee");
 
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber
  }
  
  getRole() {
    return 'Manager'
  }
}

// Export Manager class
module.exports = Manager;