const ensureAuthorization = require('../auth') // 인증 모듈 
const jwt = require('jsonwebtoken');
const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈

// (카테고리 별, 신간 여부) 전체 도서 목록 조회 
const allBooks = (req, res) => {
    let allBooksRes = {};

    let {category_id, newBook, limit, currentPage } = req.query;
    let offset = limit * (currentPage-1);

    let sql = `SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes FROM books`;
    let values = [];

    if (category_id && newBook) {
        sql += ` WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
        values = [category_id];
    }
    else if (category_id) {
        sql += ` WHERE category_id = ?`;
        values = [category_id];
    }
    else if (newBook) {
        sql += ` WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()`;
    }

    sql += ` LIMIT ? OFFSET ?`;
    values.push(parseInt(limit), offset);
    
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.NOT_FOUND).end();
            }
            if (results.length) {
                results.map(function(result) {
                    result.pubDate = result.pub_date;
                    delete result.pub_date;
                    result.categoryId = result.category_id;
                    delete result.category_id;
                });
                allBooksRes.books = results;
            }
            else 
                return res.status(StatusCodes.NOT_FOUND).end();
    });

    sql = `SELECT found_rows();`;
    conn.query(sql,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            let pagination = {};
            pagination.currentPage = parseInt(currentPage);
            pagination.totalCount = results[0]["found_rows()"];

            allBooksRes.pagination = pagination;

            return res.status(StatusCodes.OK).json(allBooksRes);
    });
};

const bookDetail = (req, res) => {
    let allBooksRes = {};

    // 로그인 상태가 아니면 => liked 빼고 보내주면 되고
    // 로그인 상태이면 => liked 추가해서 
    let authorization = ensureAuthorization(req, res);

    if (authorization instanceof jwt.TokenExpiredError) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            "message" : "로그인 세션이 만료되었습니다. 다시 로그인 하세요."
        });
    } else if (authorization instanceof jwt.JsonWebTokenError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            "message" : "잘못된 토큰입니다."
        });
    } else {
        let book_id = req.params.id;
        let sql;
        let values = [];
        if (authorization instanceof ReferenceError) {
            sql = `SELECT *,
                            (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes
                        FROM books
                        LEFT JOIN category
                        ON books.category_id = category.category_id
                        WHERE books.id = ?;`;
            values = [book_id];
        } else {
            sql = `SELECT *,
                            (SELECT count(*) FROM likes WHERE liked_book_id=books.id) AS likes,
                            (SELECT EXISTS (SELECT * FROM likes WHERE user_id=? AND liked_book_id=?)) AS liked
                        FROM books
                        LEFT JOIN category
                        ON books.category_id = category.category_id
                        WHERE books.id = ?;`;
            values = [authorization.id, book_id, book_id];
        }
        conn.query(sql, values,
            (err, results) => {
                if (err) {
                    return res.status(StatusCodes.BAD_REQUEST).end();
                }
                if (results.length) {
                    results.map(function(result) {
                        result.pubDate = result.pub_date;
                        delete result.pub_date;
                        result.categoryId = result.category_id;
                        delete result.category_id;
                        result.categoryName = result.category_name;
                        delete result.category_name;
                    });
                    return res.status(StatusCodes.OK).json(results[0]);
                }
                else 
                    return res.status(StatusCodes.NOT_FOUND).end();
        });
    }
};


module.exports = {
    allBooks,
    bookDetail
};
