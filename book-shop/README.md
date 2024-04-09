# 프로젝트 setting (7주차 Day2 02)
```
npm i express
npm i dotenv express-validator jsonswebtoken mysql2
```
위 코드를 이용하여 터미널에서 express, dotenv, express-validato,r jsonswebtoken, mysql2 를 설치함. 
```JSON
{
	"dependencies": {
		"dotenv": "^16.4.5",
		"express": "^4.19.2",
		"express-validator": "^7.0.1",
		"jsonwebtoken": "^9.0.2",
		"mysql2": "^3.9.3"
	}
}
```
package.json 파일이 새로 생기는데, 위와 같이 작성됨.

# API 작성
## 회원 API
1. 회원 가입

| 내용 | 값 |
| --- | --- |
| Method | POST |
| URI | /users/join |
| HTTP status code | 성공 201 |
| Request Body | `{`<br>`    email : “사용자가 입력한 이메일,”`<br>`    password : “사용자가 입력한 비밀번호”`<br>`} `|
| Response Body | |

2. 로그인

| 내용 | 값 |
| --- | --- |
| Method | POST |
| URI | /users/login |
| HTTP status code | 성공 200 |
| Request Body | `{`<br>`    email : “사용자가 입력한 이메일,”`<br>`    password : “사용자가 입력한 비밀번호”`<br>`} `|
| Response Body | |

3. 비밀번호 초기화 요청 

| 내용 | 값 |
| --- | --- |
| Method | POST |
| URI | /users/reset |
| HTTP status code | 성공 200 |
| Request Body | `{`<br>`    password : “사용자가 입력한 비밀번호”`<br>`} `|
| Response Body | |

4. 비밀번호 초기화 (=수정) 

| 내용 | 값 |
| --- | --- |
| Method | PUT |
| URI | /users/reset |
| HTTP status code | 성공 200 |
| Request Body | `{`<br>`    password : “사용자가 입력한 비밀번호”`<br>`} `|
| Response Body | |
