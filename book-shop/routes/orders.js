const express = require('express');
const { order, getOrders, getOrderDetail } = require('../controller/OrderController');
const router = express.Router();
const {param, validationResult} = require('express-validator');

const validate = (req, res, next) => {
  const err = validationResult(req)

  if (err.isEmpty()) {
      return next(); // 다음 할 일 (미들 웨어, 함수)
  } else {
      return res.status(400).json(err.array());
  }
};

router.use(express.json());

router.post('/', order); // 주문하기
router.get('/', getOrders); // 주문 목록 조회
router.get('/:id',
    [
        param('id').notEmpty().isInt().withMessage('order id 확인 필요')
    ], getOrderDetail); // 주문 상세 상품 조회

module.exports = router;
