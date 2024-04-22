const jwt = require('jsonwebtoken');
const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈
const dotenv = require('dotenv'); // dotenv 모듈
dotenv.config();

const addLike = (req, res) => {
    //  좋아요 추가 
    const {id} = req.params; // book_id

    let receivedJwt = req.headers["authorization"];
    console.log("received jwt : ", receivedJwt);

    let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
    console.log(decodedJwt);

    let sql = `INSERT INTO likes(user_id, liked_book_id) VALUES(?, ?);`;
    let values = [decodedJwt.id, id];
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.OK).json(results);
    });
};

const removeLike = (req, res) => {
    // 좋아요 제거 (취소)
    const {id} = req.params; // book_id

    let receivedJwt = req.headers["authorization"];
    console.log("received jwt : ", receivedJwt);

    let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
    console.log(decodedJwt);

    let sql = `DELETE FROM Bookshop.likes WHERE user_id = ? AND liked_book_id = ?;`;
    let values = [decodedJwt.id, id];

    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.OK).json(results);
    });
};

module.exports = {
    addLike,
    removeLike
};
