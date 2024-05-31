const { faker } = require('@faker-js/faker');
const _ = require("lodash")
const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
const bodyParser = require("body-parser");

var number_users = 25
var users = []

for (var i = 0; i < number_users; i++) {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    users.push({
        id: _.uniqueId(),
        username: faker.internet.userName({
            firstName: firstName,
            lastName: lastName
        }),
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({
            firstName: firstName,
            lastName: lastName
        }),
    })
}

const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined')); 
// app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const router = express.Router();
router
.get("/users",(req,res)=>{
    res.json(users);
})

router
.use((req, res) => {
    res.status(404);
    res.json({
        error: "Page not found"
    });
});

function getUsers() {
    return users
}

app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => console.log('Server app listening on port ' + port));