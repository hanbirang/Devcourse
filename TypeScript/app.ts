// 변수의 데이터 타입 명시
let stdId : number = 625;
let stdName : string = 'lhb';
let age : number = 21;
let gender : string = 'female';
let course : string = 'TypeScript';
let completed : boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
};

interface Student {
    stdId : number;
    stdName? : string;
    age? : number;  // 선택적 프로퍼티 
    gender? : 'male' | 'female'; 
    course? : string;
    completed? : boolean;
    // setName(name : string) : void;
    setName? : (name : string) => void;
    getName? : () => string;
}

class MyStudent implements Student {
    stdId = 960615;
    stdName = 'hoshi';
    age = 29;
    gender : 'male' | 'female' = 'male'; 
    course = 'node.js';
    completed = true;

    setName(name : string) : void { // 오버라이딩 
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}
const myInstance = new MyStudent();
myInstance.setName('호시');

function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'lim',
        // age : 23,
        gender : 'female', 
        course : 'JavaScript',
        completed : true
    };
}

let std = {
    stdId : 960615,
    stdName : 'hoshi',
    age : 29,
    gender : 'male', 
    course : 'node.js',
    completed : true
};

function setInfo(student : Student) : void
{
    console.log(student);
}

// setInfo(std);

// console.log(getInfo(1111));

// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 

// const user : { name : string, age : number }= {
//     name : 'hanbirang',
//     age : 23
// };

type strOrNum = number | string;

let numStr : strOrNum = '100';
let item : number;

function convertToString(val : strOrNum) : string {
    // item = numStr; 에러 : 큰 범위에서 작은 범위에 대입하는 것은 옳지 않음 
    // typeof operator 
    if (typeof val === "string")
        item = 0;
    else 
        item = val;
    return String(val); // val이라는 값을 string으로 변환시켜서 return함 
} 

function convertToNumber(val : strOrNum) : number {
    return Number(val); // val이라는 값을 숫자로 변환시켜서 return함 
} 

console.log(convertToString(numStr));   // 문자열 100
console.log(convertToNumber(numStr));   // 숫자 100

let numbers : number[] = [1, 2, 3, 4, 5];

let fruits : string[] = ['apple', 'banana', 'orange'];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열의 유니온 타입 
let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

let infer = [1, 2, 3];  // 타입 추론 

for (let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}

let readOnlyArray : ReadonlyArray<number> = [1, 2, 3];  // 읽기 전용, 수정 불가 

// 튜플 (자바스크립트에서는 없는 데이터 타입) : 타입의 순서가 정해져있다.
let greeting : [number, string, boolean] = [1, 'hello', true];

for (let i = 0; i < greeting.length; i++) {
        console.log(greeting[i]);
}

// Spread 연산자

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combineArray = [...firstArray, ...secondArray]; // ... : spread 연산자 - 괄호를 벗겨주는 역할을 함 

for (let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
