const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈

const addLike = (req, res) => {
    res.json('좋아요 추가');
};

const removeLike = (req, res) => {
    res.json('좋아요 취소');
};

module.exports = {
    addLike,
    removeLike
};
