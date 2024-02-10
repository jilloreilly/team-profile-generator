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


// Function to create the manager. It is the initial function called when creating the team.
function createManager() {
  console.log(`Please build your team`);
  
  // array of questions for user
  inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the team manager\'s name?'
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
    // Store answers into a new Manager object
    const manager = new Manager (answers.managerName, answers.id, answers.email, answers.officeNumber)

    // Push manager into team members array
    teamMembers.push(manager);
    createTeam();
  })
}
    
// Function to create an engineer
function createEngineer() {
  console.log(`Please build your engineer`);
  
  // array of questions for user
  inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineer\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter engineer\'s employee ID'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter engineer\'s email address'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter engineer\'s office number'
    }
  ]).then((answers) => {
    // Store the engineer answers into a new Engineer object
    const engineer = new Engineer (answers.engineerName, answers.id, answers.email, answers.officeNumber)

    // Push engineer into team members array
    teamMembers.push(engineer);
    createTeam();
  })
}
    

// Function to create an intern
function createIntern() {
  console.log(`Please build your intern`);
  
  // array of questions for user
  inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the intern\'s name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter intern\'s employee ID'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter intern\'s email address'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter interns\'s school'
    }
  ]).then((answers) => {
    // Store the intern answers into a new Intern object
    const intern = new Intern (answers.internName, answers.id, answers.email, answers.school)

    // Push intern object into team member array  
    teamMembers.push(intern);
    createTeam();
  })
}

// Function to create additional team members (engineer or intern) after manager has been created.  If no more employees are needed it will generate the HTML page with all information filled in.
function createTeam() {
  
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeChoice',
      message: 'What would you like to add?',
      choices: ['Engineer', 'Intern', "I'm done adding employees"]
    }
  ]).then((answers) => {
    // Checks which employee type has been selected and run appropriate function, otherwise create HTML file of team
    if (answers.employeeChoice === 'Engineer') {
      createEngineer()
    } else if(answers.employeeChoice === 'Intern') {
      createIntern();
    } else {
      fs.writeFileSync('./output/team.html', render(teamMembers), 'utf-8');
      console.log('Successfully created TEAM to ./output/team.html');
    } 
  })
}

//  Initialize the application by calling createManager() function
createManager();
