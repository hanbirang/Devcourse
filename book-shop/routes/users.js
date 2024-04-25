const express = require('express'); // express 모듈
const router = express.Router();
const conn = require('../mariadb'); // db 모듈
const {
  join, 
  login, 
  passwordResetRequest, 
  passwordReset
} = require('../controller/UserController');

const {body, validationResult} = require('express-validator');

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
    '/join',
    [
      body('email').notEmpty().isEmail().withMessage('이메일 확인 필요'),
      body('password').notEmpty().isString().withMessage('비밀번호 확인 필요'),
      validate
    ], join); // 회원 가입

router.post(
    '/login',
    [
      body('email').notEmpty().isEmail().withMessage('이메일 확인 필요'),
      body('password').notEmpty().isString().withMessage('비밀번호 확인 필요'),
      validate
    ], login); // 로그인

router.post(
    '/reset',
    [
      body('email').notEmpty().isEmail().withMessage('이메일 확인 필요'),
      validate
    ], passwordResetRequest); // 비밀번호 초기화 요청

router.put(
    '/reset',
    [
      body('email').notEmpty().isEmail().withMessage('이메일 확인 필요'),
      body('password').notEmpty().isString().withMessage('비밀번호 확인 필요'),
      validate
    ], passwordReset); // 비밀번호 초기화 

module.exports = router;
