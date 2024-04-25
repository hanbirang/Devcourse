const express = require('express');
const router = express.Router();
const{addLike, removeLike} = require('../controller/LikeController');
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
    '/:id',
    [
        param('id').notEmpty().isInt().withMessage('book id 필요'),
        validate
    ], addLike); // 좋아요 추가

router.delete(
    '/:id',
    [
        param('id').notEmpty().isInt().withMessage('book id 필요'),
        validate
    ], removeLike); // 좋아요 삭제 

module.exports = router;
