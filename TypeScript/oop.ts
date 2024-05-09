// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드 

class Employee {
    private _empName : string;
    private _age : number;
    private _empJob : string;

    constructor(empName : string, age : number, empJob : string) {
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }

    // get / set
    get empName() {
        return this._empName;
    }
    set empName(val : string) {
        this._empName = val;
    }

    printEmp = () : void => {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('lim', 21, 'developer');
// employee1.empName = 'hanbi';
employee1.printEmp();
