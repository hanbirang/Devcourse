// const conn = require('../mariadb'); // db 모듈
const mariadb = require('mysql2/promise');
const {StatusCodes} = require('http-status-codes'); // status code 모듈

const order = async (req, res) => {
    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root', 
        database: 'Bookshop',
        dateStrings: true
    });

    const {items, delivery, totalQuantity, totalPrice, userId, firstBookTitle} = req.body;

    // delivery 테이블 삽입 
    let sql = `INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?);`;
    let values = [delivery.address, delivery.receiver, delivery.contact];
    let [results] = await conn.execute(sql, values);

    let delivery_id = results.insertId;

    // orders 테이블 삽입 
    sql = `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id)
            VALUES (?, ?, ?, ?, ?);`
    values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
    [results] = await conn.execute(sql, values);
    let order_id = results.insertId;

    // orderedBook 테이블 삽입 
    sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?;`

    // imtes.. 배열 : 요소들을 하나씩 꺼내서 (foreach문 돌려서) > 
    values = [];
    items.forEach((item) => {
        values.push([order_id, item.book_id, item.quantity]);
    })

    results = await conn.query(sql, [values]);

    return res.status(StatusCodes.OK).json(results[0]);
};

const getOrders = (req, res) => {
    res.json('주문 목록 조회');
};

const getOrderDetail = (req, res) => {
    res.json('주문 상세 상품 조회 ');
};

module.exports = {
    order,
    getOrders,
    getOrderDetail
};
