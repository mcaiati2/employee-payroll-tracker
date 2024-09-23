const logs = [];
window.console.log = function (log) {
  logs.push(log);
};

edTest(
  'Should calculate the average salary and console.log() "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with no decimals.',
  () => {
    const employees1 = [
      { firstName: 'John', lastName: 'Doe', salary: 50000 },
      { firstName: 'Jane', lastName: 'Doe', salary: 60000 },
      { firstName: 'Jim', lastName: 'Doe', salary: 70000 },
    ];

    displayAverageSalary(employees1);

    if (
      logs.includes(
        'The average employee salary between our 3 employee(s) is $60000.00'
      )
    ) {
      return {
        ok: true,
        passed: true,
        score: 15,
        feedback:
          'Great job! You computed the correct value given salaries with no decimals!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback:
        'The average salary was not calculated correctly when given salaries with no decimals.',
    };
  }
);

edTest(
  'Should calculate the average salary and console.log() "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with decimals.',
  () => {
    const employees2 = [
      { firstName: 'John', lastName: 'Doe', salary: 50000.5 },
      { firstName: 'Jane', lastName: 'Doe', salary: 60000.75 },
      { firstName: 'Jim', lastName: 'Doe', salary: 70000.25 },
    ];

    displayAverageSalary(employees2);

    if (
      logs.includes(
        'The average employee salary between our 3 employee(s) is $60000.50'
      )
    ) {
      return {
        ok: true,
        passed: true,
        score: 15,
        feedback:
          'Great job! You computed the correct value given salaries with two decimal places!',
      };
    }
    return {
      ok: true,
      passed: false,
      score: 0,
      feedback:
        'The average salary was not calculated correctly when given salaries with two decimal places.',
    };
  }
);
