class Employee
{
    constructor(eid, ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.salary=50000;

Employee.prototype.display=function()
                            {
                                console.log(this.eid, this.ename, this.salary);

                            }

emp1obj =new Employee(101, "David");
emp1obj.display();
//console.log(emp1obj.eid, emp1obj.ename, emp1obj.salary);


emp2obj=new Employee(102, "John");
emp2obj.display();
//console.log(emp2obj.eid, emp2obj.ename, emp2obj.salary);