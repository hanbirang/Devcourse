const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈
const jwt = require('jsonwebtoken'); // jwt 모듈 
const dotenv = require('dotenv'); // dotenv 모듈
dotenv.config();

const join = (req, res) => {
    const {email, password} = req.body;

    let sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    let values = [email, password];
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.CREATED).json(results);
        });
};

const login = (req, res) => {
    const {email, password} = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(sql, email,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            } 

            const loginUser = results[0];
            if (loginUser && loginUser.password == password) {
                // 토큰 발행 
                const token = jwt.sign({
                    email : loginUser.email
                }, process.env.PRIVATE_KEY, {
                    expiresIn : '5m',
                    issuer : "hanbirang"
                });

                //토큰 쿠키에 담기 
                res.cookie("token", token, {
                    httpOnly : true
                });
                console.log(token);

                return res.status(StatusCodes.OK).json(results);
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).end();
                // 401 : Unauthorized (미인증) - 서버가 누군지 모름 
                // 403 : Forbidden (접근 권리 없음) - 서버가 누군지 앎   
            }
        })
};

const passwordResetRequest = (req, res) => {
    const {email} = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(sql, email,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            
            // 이메일로 유저가 있는지 찾아보기
            const user = results[0];
            if (user) {
                return res.status(StatusCodes.OK).end();
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).end();
            }
        }
    );
};

const passwordReset = (req, res) => {
    res.json('비밀번호 초기화');
};

module.exports = {
    join,
    login,
    passwordResetRequest,
    passwordReset
};
