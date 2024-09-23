let promptCount = 0;
let confirmCount = 0;

const promptValues = [
  'John',
  'Doe',
  50000,
  'John',
  'Doe',
  50000,
  'Jane',
  'Doe',
  60000,
];
const confirmValues = [false, true, false];

window.prompt = function () {
  return promptValues[promptCount++];
};
window.confirm = function () {
  return confirmValues[confirmCount++];
};

edTest(
  'Should create a new employee object with the given first name, last name, and salary.',
  () => {
    const employees = collectEmployees();

    if (
      employees.length === 1 &&
      employees[0].firstName === 'John' &&
      employees[0].lastName === 'Doe' &&
      employees[0].salary === 50000
    ) {
      return {
        ok: true,
        passed: true,
        score: 20,
        feedback: 'Great job! You created the correct employee object!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback: 'The employee object was not created correctly.',
    };
  }
);

edTest(
  'Should create two new employee objects with the given first names, last names, and salaries.',
  () => {
    const employees = collectEmployees();

    if (
      employees.length === 2 &&
      employees[0].firstName === 'John' &&
      employees[0].lastName === 'Doe' &&
      employees[0].salary === 50000 &&
      employees[1].firstName === 'Jane' &&
      employees[1].lastName === 'Doe' &&
      employees[1].salary === 60000
    ) {
      return {
        ok: true,
        passed: true,
        score: 20,
        feedback: 'Great job! You created the correct employee objects!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback: 'The employee objects were not created correctly.',
    };
  }
);
