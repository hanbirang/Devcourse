const express = require('express');
const {
    allBooks, 
    bookDetail, 
    booksByCategory 
 } = require('../controller/BookController');
const router = express.Router();

router.use(express.json());

router.get('/', allBooks); // 전체 도서 조회
router.get('/:id', bookDetail); // 개별 도서 조회 
router.get('/', booksByCategory); // 카테고리 별 도서 목록 조회 

module.exports = router;
