class Student
{

    // setDetails(sid, sname, grade)
    // {
    //     this.sid=sid;
    //     this.sname=sname;
    //     this.grade=grade;
    // }

      constructor(sid, sname, grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    display()
    {
        console.log(this.sid, this.sname, this.grade);
    }
}

let stu=new Student(101, "John", "A");
//stu.setDetails(101, "John", "A");
stu.display();