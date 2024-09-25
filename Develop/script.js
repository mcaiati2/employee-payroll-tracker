// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  let addEmployee = true;
  const employeesArray = [];

  while (addEmployee) {

    const firstNamePrompt = prompt('enter your first name');
    const lastNamePrompt = prompt('enter your last name');
    const salaryPrompt = prompt('enter your salary');

    if (!firstNamePrompt || !lastNamePrompt) {
      alert('You are required to provide a first name and a last name.');
      continue;
    }

    let salary = parseInt(salaryPrompt);
    if (isNaN(salary)) {
      salary = 0;
    }

    const employeeObject = {
      firstName: firstNamePrompt,
      lastName: lastNamePrompt,
      salary: salary,

    }


    employeesArray.push(employeeObject);

    addEmployee = confirm('do you want to add another employee?')
  }
  return employeesArray;

};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalEmployeeSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const employee = employeesArray[i];
    totalEmployeeSalary += employee.salary;
  }
  const averageSalary = (totalEmployeeSalary / employeesArray.length).toFixed(2);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomNumber = Math.floor(Math.random() * employeesArray.length);
  console.log('Congratulations to ' + employeesArray[randomNumber].firstName + " " + employeesArray[randomNumber].lastName + ', our random drawing winner!')
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

