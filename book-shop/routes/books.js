const express = require('express');
const {
    allBooks, 
    bookDetail
 } = require('../controller/BookController');
const router = express.Router();
const {param, query, validationResult} = require('express-validator');

const validate = (req, res, next) => {
  const err = validationResult(req)

  if (err.isEmpty()) {
      return next(); // 다음 할 일 (미들 웨어, 함수)
  } else {
      return res.status(400).json(err.array());
  }
};

router.use(express.json());

router.get(
    '/',
    [
        query('limit').notEmpty().isInt().withMessage('page 당 도서 수 확인 필요'),
        query('currentPage').notEmpty().isInt().withMessage('현재 페이지 확인 필요'),
        validate
    ], allBooks); // 전체 도서 조회 & 카테고리 별 도서 조회 

router.get(
    '/:id',
    [
        param('id').notEmpty().isInt().withMessage('book id 필요'),
        validate
    ], bookDetail); // 개별 도서 조회 

module.exports = router;
