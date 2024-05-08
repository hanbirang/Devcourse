var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var numbers = [1, 2, 3, 4, 5];
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 배열의 유니온 타입 
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; // 타입 추론 
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
var readOnlyArray = [1, 2, 3]; // 읽기 전용, 수정 불가 
// 튜플 (자바스크립트에서는 없는 데이터 타입) : 타입의 순서가 정해져있다.
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// Spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true); // ... : spread 연산자 - 괄호를 벗겨주는 역할을 함 
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
