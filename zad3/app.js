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

//const firstname='Patrycja';
//const lastName='Krolczewska';
//const major='informatyka';

app.get('/home', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});


app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p>');
});

app.get('/add-student', (req, res) => {
    res.send(`
        <title>ADD-STUDENT</title>
        <body>
            <form action="/student" method="POST">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required><br><br>
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required><br><br>
                <label for="major">Major:</label>
                <input type="text" id="major" name="major" required><br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
    `);
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