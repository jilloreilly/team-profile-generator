// TODO: Write code to define and export the Employee class

// Define Employee class with properties for name, ID, email and getRole method
class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id 
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return 'Employee' 
    }
}

// Export Employee class
module.exports = Employee;

