const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

// localhost:2424/fake/users
// 한 명의 사용자 정보 생성
// email, password, fullName, contact 

app.get('/fake/users', function (req, res) {
    res.status(200).json({
        email : faker.internet.email(),
        password : faker.internet.password(),
        fullName : faker.person.fullName(),
        number : faker.phone.number()
    });
})

app.listen(2424);
