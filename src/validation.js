// Validation functions for inquirer

// Check there is a value and that it is a number
function validateId(value) {
  if (!value || isNaN(value) ) {
    return `Please enter a valid employee ID`;
  }
  return true;  
}

// Check for valid email using a regular expression
function validateEmail(value) {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    return `Please enter a valid email address`;
  }
  return true;
}

// Check there is a value and that it is a number for office number
function validateOfficeNum(value) {
  if (!value || isNaN(value) ) {
    return `Please enter a valid office number`;
  }
  return true;  
}

// Check for user input
function isEmptyInput(value) {
  if (!value) {
    return `Please enter some information`;
  }
  return true;
}


module.exports = {validateId, validateEmail, validateOfficeNum, isEmptyInput}