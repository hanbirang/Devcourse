const express = require('express');
const router = express.Router();
const {
    addToCart,
    getCartItems,
    removeCartItem
} = require('../controller/CartController');

const {body, param, validationResult} = require('express-validator');

const validate = (req, res, next) => {
  const err = validationResult(req)

  if (err.isEmpty()) {
      return next(); // 다음 할 일 (미들 웨어, 함수)
  } else {
      return res.status(400).json(err.array());
  }
};

router.use(express.json());


router.post(
    '/',
    [
        body('book_id').notEmpty().isInt().withMessage('book id 확인 필요'),
        body('quantity').notEmpty().isInt().withMessage('수량 확인 필요'),
    ], addToCart); // 장바구니 담기
router.get('/', getCartItems); // 장바구니 아이템 목록 조회 / 선택된 장바구니 아이템 목록 조회 
router.delete('/:id',
    [
        param('id').notEmpty().isInt().withMessage('cartItem id 확인 필요')
    ], removeCartItem); // 장바구니 도서 삭제 

module.exports = router;
