class Bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends Bank
{
    roi()
    {
        return 10.5;
    }
}

class RBC extends Bank
{
    roi()
    {
        return 12.5;
    }
}
let rbc=new RBC();
console.log(rbc.roi());

let axis=new Axis();
console.log(axis.roi());