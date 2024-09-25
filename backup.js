// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  let addEmployee = true;
  const employeesArray = [];
  // creates the employees list variable as an array named employeesArray

  while(addEmployee) {
    // checking if addEmployee value is truthy, then run code below if it is

  const firstNamePrompt = prompt('enter your first name');
  // sets the value of a new variable named firstName to whatever the prompt entered by the user is in this field.
  if (firstNamePrompt === null) break;

  const lastNamePrompt = prompt('enter your last name');
  if (lastNamePrompt === null) break;

  const salaryPrompt = prompt('enter your salary');
  if (salaryPrompt === null) break;

  let salary = parseInt(salaryPrompt);
  if (isNaN(salary)) {
    salary = 0;
  }

  const employeeObject = {
    firstName: firstNamePrompt,
    lastName: lastNamePrompt,
    salary: salaryPrompt,
   
  }


  employeesArray.push(employeeObject);
  // adds the employeeObject to the end of the employeesArray array

  addEmployee = confirm('do you want to add another employee?')
  // changing original variable
}
  return employeesArray;
  // return doesn't need parentheses. similar to declaring a variable

};

// semicolon on single lines and not on multiple line

// you can always look up, can't look down

// cant use a semicolon within an object, comma separate

// always make variable names very descriptive

// objects are useful to store multiple values that go together for one thing (i.e. one person)




// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalEmployeeSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const employee = employeesArray[i];
    totalEmployeeSalary += employee.salary;
    // each employee salary gets added on tothe total. += is equal to myself plus the next value 
  }
  console.log('average salary is: ' + totalEmployeeSalary / employeesArray.length);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomNumber = Math.floor(Math.random() * employeesArray.length)
  // how many employees we have is how long we want the random number to be

  console.log('Congratulations to ' + employeesArray[randomNumber].firstName + " " + employeesArray[randomNumber].lastName + ', our random drawing winner!')
  // room with other rooms inside
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);


// always put event listeners at the bottom- everything loads first and then give access to different functions

