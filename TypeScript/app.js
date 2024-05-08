// 변수의 데이터 타입 명시
var stdId = 625;
var stdName = 'lhb';
var age = 21;
var gender = 'female';
var course = 'TypeScript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 960615;
        this.stdName = 'hoshi';
        this.age = 29;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('호시');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lim',
        // age : 23,
        gender: 'female',
        course: 'JavaScript',
        completed: true
    };
}
var std = {
    stdId: 960615,
    stdName: 'hoshi',
    age: 29,
    gender: 'male',
    course: 'node.js',
    completed: true
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(1111));
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 
var user = {
    name: 'hanbirang',
    age: 23
};
var numStr = '100';
var item;
function convertToString(val) {
    // item = numStr; 에러 : 큰 범위에서 작은 범위에 대입하는 것은 옳지 않음 
    // typeof operator 
    if (typeof val === "string")
        item = 0;
    else
        item = val;
    return String(val); // val이라는 값을 string으로 변환시켜서 return함 
}
function convertToNumber(val) {
    return Number(val); // val이라는 값을 숫자로 변환시켜서 return함 
}
console.log(convertToString(numStr)); // 문자열 100
console.log(convertToNumber(numStr)); // 숫자 100
