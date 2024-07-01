
class Animal {
    eat() {
        console.log("eating");
    }
}


class Dog extends Animal {
    bark() {
        console.log("barking");
    }
}


class Babydog extends Dog {
    sweep() {

        console.log("sweeping");
    }
}


let x = new Babydog();
x.sweep();
x.bark();
x.eat();