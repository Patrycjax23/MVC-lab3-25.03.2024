const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use((req, res, next) => {
    const date = new Date().toISOString();
    console.log(`Request ${req.method} on path ${req.url} ${date}`);
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));


let students = [];


app.use(express.static('public'));


app.get('/home', (req, res) => {
    res.sendFile(v1 + '/views/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(v1 + '/views/student.html');
});

app.get('/add-student', (req, res) => {
    res.sendFile(v1 + '/views/add-student.html');
});

app.post('/student', (req, res) => {
    const firstname='Patrycja';
    const lastName='Krolczewska';
    const major='informatyka';
    
    students.push({ firstName, lastName, major });
    res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`);
});


app.get('/users', (req, res) => {
    let userList = '<ul>';
    students.forEach(student => {
        userList += `<li><p>${student.firstName} ${student.lastName} - ${student.major}</p></li>`;
    });
    userList += '</ul>';
    res.send(userList);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`port= ${PORT}`);
});
