let employee=
{
    empname:"Scott",
    empid: 101,
    job: "Engineer",
    basicSal: 50000,

    bonus: function()   //here function name is optional i.e. function cal()
            {
                return((this.basicSal*10)/100);
            }

};

console.log(employee.empname);

console.log(employee.bonus());
