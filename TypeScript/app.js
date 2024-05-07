// 변수의 데이터 타입 명시
var stdId = 625;
var stdName = 'lhb';
var age = 21;
var gender = 'female';
var course = 'TypeScript';
var completed = false;
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lim',
        age: 23,
        gender: 'female',
        course: 'JavaScript',
        completed: true
    };
}
console.log(getInfo(1111));
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 
