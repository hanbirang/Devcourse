class Employee {
    constructor(
        private _empName : string,
        private _age : number,
        private _empJob : string
    ) {

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
employee1.empName = 'hanbi';
employee1.printEmp();
