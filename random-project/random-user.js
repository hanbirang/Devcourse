const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

// localhost:2424/fake/users
// 한 명의 사용자 정보 생성
// email, password, fullName, contact 

app.get('/fake/users/', function (req, res) {
    const {num} = req.query;
    
    let index = 1;
    let users = [];
    while (index <= num) {
        users.push({
            email : faker.internet.email(),
            password : faker.internet.password(),
            fullName : faker.person.fullName(),
            number : faker.phone.number()
        });
        index++;
    }
    res.status(200).json(users);
})

app.listen(2424);
