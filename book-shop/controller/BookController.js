const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈

const allBooks = (req, res) => {
    // (요약된) 전체 도서 리스트
    let sql = `SELECT * FROM books`;
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    });
};

const bookDetail = (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    let sql = `SELECT * FROM books WHERE id = ?`;
    conn.query(sql, id,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            if (results[0])
                return res.status(StatusCodes.OK).json(results[0]);
            else 
                return res.status(StatusCodes.NOT_FOUND).end();
    });
};

const booksByCategory = (req, res) => {
    res.json('카테고리 별 도서 목록 조회 ');
};

module.exports = {
    allBooks,
    bookDetail,
    booksByCategory
};
