let logs = [];
window.console.log = function (log) {
  logs.push(log);
};

edTest(
  'Should choose an employee at random and console.log: "Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!"',
  () => {
    const employees = [
      { firstName: 'John', lastName: 'Doe', salary: 50000 },
      { firstName: 'Jane', lastName: 'Doe', salary: 60000 },
      { firstName: 'Jim', lastName: 'Doe', salary: 70000 },
    ];
    getRandomEmployee(employees);
    if (
      logs.includes(
        'Congratulations to John Doe, our random drawing winner!'
      ) ||
      logs.includes(
        'Congratulations to Jane Doe, our random drawing winner!'
      ) ||
      logs.includes('Congratulations to Jim Doe, our random drawing winner!')
    ) {
      return {
        ok: true,
        passed: true,
        score: 15,
        feedback: 'Great job! You selected a random employee!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback: 'A random employee was not selected correctly.',
    };
  }
);

edTest(
  'Should be able to get all employees in the drawing and log: "Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!"',
  () => {
    logs = [];
    const employees = [
      { firstName: 'John', lastName: 'Doe', salary: 50000 },
      { firstName: 'Jane', lastName: 'Doe', salary: 60000 },
      { firstName: 'Jim', lastName: 'Doe', salary: 70000 },
    ];
    for (let i = 0; i < 100; i++) {
      getRandomEmployee(employees);
    }
    if (
      logs.includes(
        'Congratulations to John Doe, our random drawing winner!'
      ) &&
      logs.includes(
        'Congratulations to Jane Doe, our random drawing winner!'
      ) &&
      logs.includes('Congratulations to Jim Doe, our random drawing winner!')
    ) {
      return {
        ok: true,
        passed: true,
        score: 15,
        feedback:
          'Great job! All employees were able to be selected from the drawing!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback: 'Not all employees were able to be selected from the drawing.',
    };
  }
);
