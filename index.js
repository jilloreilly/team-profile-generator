const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create a empty array to store the team members after they are created
const teamMembers = []
// Create a empty array to store the member IDs after they are created

// Function to create the manager. Should be the initial function called when creating the team.

function createManager() {
  console.log(`Please build your team`);
  
  // array of questions for user

  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the team managers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter an employee ID'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email address'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter office number'
    }
  ]).then((answers) => {
    const manager = new Manager (answers.managerName, answers.id, answers.email. answers.officeNumber)

    teamMembers.push(manager);
    createTeam();
  })
}
    // Ask for a name, id, email and office number for the manager

    // Then store the answers into a new Manager object

    //push the manager into the team members array



// Function to create an engineer.

function createEngineer() {
  //console.log(`Please build your engineer`);
  
  // array of questions for user

  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter engineers employee ID'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter enginners email address'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter engineers office number'
    }
  ]).then((answers) => {
    const engineer = new Engineer (answers.engineerName, answers.id, answers.email. answers.officeNumber)

    teamMembers.push(engineer);
    createTeam();
  })
}
    // Asks for a name, id, email, and github

    //then store the answers into a new Engineer object

    //push the engineer into the team members array


// Function to create an intern

function createIntern() {
  //console.log(`Please build your engineer`);
  
  // array of questions for user

  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the intern name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter intern employee ID'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter intern email address'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter interns school'
    }
  ]).then((answers) => {
    const intern = new Intern (answers.engineerName, answers.id, answers.email. answers.school)

    teamMembers.push(intern);
    createTeam();
  })
}
    // Asks for a name, id, email, and school

    // Then store the answers into the team members arry

    // push the intern into the team members array


// Function to ask the user what team member they would like to create next, either a Engineer or Intern. Also ask if they don't want to add any more team members. SHOULD BE CALLED AT THE END OF EACH MEMBER FUNCTION SO THEY CAN CREATE ANOTHER MEMBER AFTER ALREADY CREATING ONE.

    // Then create a conditional to check which member the user picked and run the appropriate function based off of that input ex:`if(userChoice === 'Engineer'){createEngineer()}`
    // Have a else condition so that if they choose to not make any more members, the file gets written.(Can create a function for this and then call the function)

function createTeam() {
  
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeChoice',
      message: 'What would you like to add?',
      choices: ['Engineer', 'Intern', "I'm done adding employees"]
    }
  ]).then((answers) => {
    if (answers.employeeChoice === 'Engineer') {
      createEngineer()
    } else if(answers.employeeChoice === 'Intern') {
      createIntern();
    } else {
      fs.writeFileSync('./output/team.html', render(teamMembers), 'utf-8')
    } 
  })
}

// Function to hold all of the other functions.
    // Call the function to initialize the app.

createManager();
