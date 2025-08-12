const express = require('express');
const router = express.Router();

// In-memory data
let students = [
    { id: 1, name: 'Ali', age: 20 },
    { id: 2, name: 'Sara', age: 22 }
];

// Get all students
router.get('/', (req, res) => {
    res.json(students);
});

// Get
router.get('/:id', (req, res, next) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return next(new Error('Student not found'));
    }
    res.json(student);
});

// Add
router.post('/', (req, res, next) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return next(new Error('Name and age are required'));
    }
    const newStudent = {
        id: students.length + 1,
        name,
        age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update
router.put('/:id', (req, res, next) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return next(new Error('Student not found'));
    }
    const { name, age } = req.body;
    student.name = name || student.name;
    student.age = age || student.age;
    res.json(student);
});

// Delete
router.delete('/:id', (req, res, next) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) {
        return next(new Error('Student not found'));
    }
    students.splice(index, 1);
    res.json({ message: 'Student deleted' });
});

module.exports = router;
