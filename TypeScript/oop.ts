// 일반적인 직원 정보
let empName : string;
let age : number;
let empJob : string;

function printEmp(empName : string, age : number, empJob : string) : void {
    console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
}

printEmp('lim', 21, 'developer');
