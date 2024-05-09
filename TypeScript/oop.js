// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드 
var Employee = /** @class */ (function () {
    function Employee(empName, age, empJob) {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empJob, "\uC785\uB2C8\uB2E4."));
        };
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get / set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('lim', 21, 'developer');
// employee1.empName = 'hanbi';
employee1.printEmp();
