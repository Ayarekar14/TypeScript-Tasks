class students {

    rollno: number;
    name: string;
    perc: number;
    fees: number;



    getinfo(rollno, name, perc, fees) {
        this.rollno = rollno;
        this.name = name;
        this.perc = perc;
        this.fees = fees;

    }

    showdata() {
        console.log("rollno:" + this.rollno);
        console.log("name:" + this.name);
        console.log("perc:" + this.perc);
        console.log("fees:" + this.fees);


    }

}

let users = new students();
users.getinfo(45, "rohit", 85, 150000);

users.showdata();
