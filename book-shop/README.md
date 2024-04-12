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

## 도서 API
1. 전체 도서 조회

| 내용 | 값 |
| --- | --- |
| Method | GET |
| URI | /books |
| HTTP status code | 성공 20 |
| Request Body | `[`<br>`    {`<br>`        id : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “요약 설명”, `<br>`        author : “도서 작가”,`<br>`         price : 가격,`<br>`         likes : 좋아요,`<br>`         pubDate : “출간일”`<br>`    },`<br>`    {`<br>`        id : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “요약 설명”,} `<br>`        author : “도서 작가”,`<br>`         price : 가격,`<br>`         likes : 좋아요,`<br>`         pubDate : “출간일”`<br>`    }`<br>`]`|
| Response Body | |

2. 개별 도서 조회

| 내용 | 값 |
| --- | --- |
| Method | GET |
| URI | /books/:id |
| HTTP status code | 성공 20 |
| Request Body | |
| Response Body |  `{`<br>`    id : 도서 id,`<br>`    title : “도서 제목”,`<br>`    category : “카테고리”,`<br>`    format : “포맷”,`<br>`    isbn : “isbn”,`<br>`    summary : “요약 설명”, `<br>`    description : “상세 설명”,`<br>`    author : “도서 작가”,`<br>`     pages : 쪽 수,`<br>`     index : “목차”, `<br>`     price : 가격,`<br>`     likes : 좋아요,`<br>`     liked : boolean ,`<br>`     pubDate : “출간일”`<br>`}` |

3. 카테고리 별 도서 목록 조회

| 내용 | 값 |
| --- | --- |
| Method | GET |
| URI | /books?categoryId = {categoryId}&new={boolean} |
| HTTP status code | 성공 20 |
| Request Body | |
| Response Body |  `[`<br>`    {`<br>`        id : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “요약 설명”, `<br>`        author : “도서 작가”,`<br>`         price : 가격,`<br>`         likes : 좋아요,`<br>`         pubDate : “출간일”`<br>`    },`<br>`    {`<br>`        id : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “요약 설명”, `<br>`        author : “도서 작가”,`<br>`         price : 가격,`<br>`         likes : 좋아요,`<br>`         pubDate : “출간일”`<br>`    }`<br>`]`|

## 좋아요 API 
1. 좋아요 추가
   
| 내용 | 값 |
| --- | --- |
| Method | POST |
| URI | /likes/{bookId} |
| HTTP status code | 성공 200 |
| Request Body | |
| Response Body | |

2. 좋아요 취소

| 내용 | 값 |
| --- | --- |
| Method | DELETE |
| URI | /likes/{bookId} |
| HTTP status code | 성공 200 |
| Request Body | |
| Response Body | |

## 장바구니 API
1. 장바구니 담기

| 내용 | 값 |
| --- | --- |
| Method | POST |
| URI | /cart |
| HTTP status code | 성공 201 |
| Request Body | `{`<br>`    bookId : 도서 id,`<br>`    count : 수량 ”`<br>`} `|
| Response Body | |

2. 장바구니 조회

| 내용 | 값 |
| --- | --- |
| Method | GET |
| URI | /books |
| HTTP status code | 성공 200 |
| Request Body | `[`<br>`    {`<br>`        id : 장바구니 도서 id,`<br>`        bookId : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “도서 요약”,`<br>`        count : 수량,`<br>`         price : 가격`<br>`    },`<br>`    {`<br>`        id : 장바구니 도서 id,`<br>`        bookId : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “도서 요약”,`<br>`        count : 수량,`<br>`         price : 가격`<br>`    }`<br>`   , ...`<br>`]`|
| Response Body | |

3. 장바구니 도서 삭제

| 내용 | 값 |
| --- | --- |
| Method | DELETE |
| URI | /cart/{bookId} |
| HTTP status code | 성공 200 |
| Request Body | |
| Response Body | |

4. **<u>(장바구니에서 선택한)</u>** 주문 "예상" 상품 목록 조회

| 내용 | 값 |
| --- | --- |
| Method | GET |
| URI | / |
| HTTP status code | 성공 200 |
| Request Body | `[ cartItemId, cartItemId, …]` |
| Response Body | `[`<br>`    {`<br>`        cartItemId : 장바구니 도서 id,`<br>`        bookId : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “도서 요약”,`<br>`        count : 수량,`<br>`         price : 가격`<br>`    },`<br>`    {`<br>`        id : 장바구니 도서 id,`<br>`        bookId : 도서 id,`<br>`        title : “도서 제목”,`<br>`        summary : “도서 요약”,`<br>`        count : 수량,`<br>`         price : 가격`<br>`    }`<br>`   , ...`<br>`]` |

