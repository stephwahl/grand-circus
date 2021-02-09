"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Student;
}());
var student = new Student("BJ", "Clark");
var greeter = function (user) { return "Hello " + user.firstName + " " + user.lastName; };
var user = {
    firstName: 'BJ',
    lastName: 'Clark',
};
console.log(greeter(user));
var users = [1, 2];
