const employee = {
    name: "Mallory",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "address",
    "12 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const newName = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Mal");

function deleteFromEmployeeByKey(employee, key) {
 const deleteName = {...employee};
 delete deleteName["name"];
return deleteName;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee["name"];
    return employee;
}
