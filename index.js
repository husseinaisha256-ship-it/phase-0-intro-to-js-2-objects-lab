// Write your solution in this file!
// Employee should be defined (might be in test setup)
let employee = {
  name: 'Sam'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create completely new object
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // Create new object and delete property
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}