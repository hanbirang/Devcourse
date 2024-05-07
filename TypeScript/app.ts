// 변수의 데이터 타입 명시
let stdId : number = 625;
let stdName : string = 'lhb';
let age : number = 21;
let gender : string = 'female';
let course : string = 'TypeScript';
let completed : boolean = false;

function getInfo(id : number) : {
    stdId : number;
    stdName : string;
    age : number;  
    gender : string; 
    course : string;
    completed : boolean;
}
{
    return null;
}
// 반환되는 객체의 구조를 타입으로 지정 

// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 
