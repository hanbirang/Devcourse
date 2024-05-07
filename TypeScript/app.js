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
setInfo(std);
// console.log(getInfo(1111));
// 함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number {
//     return a + b;
// }
// 만약 반환 값이 없으면 void 사용 
