const express = require("express");   // require the Express module

const app = express();    // creates an instance of an Express server

const port = 3000;    // define the port

app.listen(port, () => console.log(`Listening on port: ${port}.`));    // run the server

const students = ["BJ", "Suguna", "Kim", "Tiia", "Stacey"];

app.get("/students", (req, res) =>{
    //the actual functionality
    res.json(students);
});

// accept POST request at URI: /students
app.post("/students", (req, res) => {
    // sutdents.push(newStudent);
    res.json("Adding a student..");
});
// accept PUT request at URI: /students
app.put("/students", (req, res) => {
    // removes 1 item from the array, starting at index provided then add newStudent in its place
    // students.splice(index, 1, newStudent);
    res.json("Updating a student..");
});
// accept DELETE request at URI: /students
app.delete("/students", (req, res) => {
    //students.splice(index, 1);
    res.json("Deleting a student..");
});