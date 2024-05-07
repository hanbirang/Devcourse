// 변수의 데이터 타입 명시
let stdId : number = 625;
let stdName : string = 'lhb';
let age : number = 21;
let gender : string = 'female';
let course : string = 'TypeScript';
let completed : boolean = false;

interface Student {
    stdId : number;
    stdName : string;
    age? : number;  // 선택적 프로퍼티 
    gender : string; 
    course : string;
    completed : boolean;
}

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
console.log(getInfo(1111));

// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 
