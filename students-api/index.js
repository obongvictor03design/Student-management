const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { id: 1, name: "Ameen", age: 26, course: "Physics", level: "500" },
    { id: 2, name: "Mustapha", age: 29, course: "Pharmacy", level: "400" },
    { id: 3, name: "Treasure", age: 24, course: "Radiography", level: "300" }
];

let nextId = 4;

app.post("/students", (req, res) => {
    const { name, age, course, level } = req.body;

    if (!name || !age || !course || !level) {
        return res.status(400).json({
            message: "name, age, course, and level are all required"
        });
    }

    const newStudent = { id: nextId++, name, age, course, level };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.get("/students", (req, res) => {
    res.status(200).json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});


app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, age, course, level } = req.body;

    if (name !== undefined) student.name = name;
    if (age !== undefined) student.age = age;
    if (course !== undefined) student.course = course;
    if (level !== undefined) student.level = level;

    res.status(200).json(student);
});

app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students[index];
    students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.listen(PORT, () => {
    console.log(`Students API running on http://localhost:${PORT}`);
});