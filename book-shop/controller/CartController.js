const conn = require('../mariadb'); // db 모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈

const addToCart = (req, res) => {
    res.json('장바구니 담기');
};

// 장바구니 아이템 목록 조회 
const getCartItems = (req, res) => {
    res.json('장바구니 조회');
};

const removeCartItem = (req, res) => {
    res.json('장바구니 도서 삭제 ');
};

module.exports = {
    addToCart,
    getCartItems,
    removeCartItem
};
