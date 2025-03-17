class Test
{
   static a=10;  //static variable
    b=20;      //non-static variable

    static m1()
    {
        console.log("This is m1 static method................");
    }

    m2()
    {
        console.log("This is m2 non-static method.....");
    }
}

console.log(Test.a);   //10
console.log(Test.b);   //undefined

// Test.m1();    //static method
// Test.m2();   //error


let t= new Test();
console.log(t.b);
t.m2();