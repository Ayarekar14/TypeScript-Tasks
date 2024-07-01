class Car {

    color: string;

    constructor(color:string)
    {
        this.color = color
    }
}

class Audi extends Car {
    price : number;

    constructor(color:string,price:number)
    {
        super(color);
        this.price = price;
    }

    disp()
    {
        console.log("audi of color:" + this.color);
        console.log("audi of price:" + this.price);
  
    }
}

let r = new Audi ("thar",25000);
r.disp();