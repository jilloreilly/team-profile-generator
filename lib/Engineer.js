// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Define Engineer class with inheritance from Employee and addiional property of github
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return 'Engineer'
  }
}

// Export Engineer class
module.exports = Engineer;
