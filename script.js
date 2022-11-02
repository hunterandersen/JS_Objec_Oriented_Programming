class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby){
        //Grab the array
        //Look at all the elements of the array
        //Find the ones that match something
        //Remove the ones that match
        //Filter returns a new array
        //Reassign our array to that new array

        this.hobbies = this.hobbies.filter(function (currHobby){
            console.log(currHobby);
            if (currHobby == hobby){
                return false;
            }
            return true;
        });
    }

    greeting(){
        console.log("Hello fellow person!");
    }
}
const myPerson = new Person("Hunter", 1, "house", ["chess", "rock climbing", "chess", "yoga", "meditation", "reading"]);
myPerson.greeting();

class Coder extends Person{
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting(){
        console.log("Hi! I'm a coder");
    }

}

const myCoder = new Coder("Harrison", 32, "Condominium", ["mows the lawn", "building a roof", "smithing"]);
console.log(myCoder);
myCoder.greeting();

class Calculator{
    constructor(){
        this.result = 0;
    }

    add(a, b){
        let x = parseInt(a);
        let y = parseInt(b);
        if (!isNaN(x)){
            if (!isNaN(y)){
                this.result = x + y;
            }else{
                this.result = this.result + x;
            }
        }

        return this.result;
    }

    subtract(a, b){
        let x = parseInt(a);
        let y = parseInt(b);
        if (!isNaN(x)){
            if (!isNaN(y)){
                this.result = x - y;
            }else{
                this.result = this.result - x;
            }
        }

        return this.result;
    }

    multiply(a, b){
        let x = parseInt(a);
        let y = parseInt(b);
        if (!isNaN(x)){
            if (!isNaN(y)){
                this.result = x * y;
            }else{
                this.result = this.result * x;
            }
        }


        return this.result;
    }

    divide(a, b){
        let x = parseInt(a);
        let y = parseInt(b);
        if (!isNaN(x)){
            if (!isNaN(y)){
                this.result = x / y;
            }else{
                this.result = this.result / x;
            }
        }


        return this.result;
    }

    promptAB(){
        let a = window.prompt("Input A");
        let b = window.prompt("Input B");
        let operation = window.prompt("Input Operation (+ - * /)");
        switch(operation){
            case "+": this.add(a, b);
            break;
            case "-": this.subtract(a, b);
            break;
            case "*": this.multiply(a, b);
            break;
            case "/": this.divide(a, b); console.log("here");
            break;
            default: console.log("Invalid input operation");
        }
        this.displayResult();
    }

    displayResult(){
        console.log(this.result);
    }

}

const myCalc = new Calculator();

console.log(myCalc);
myCalc.add(1000, 0);
myCalc.displayResult();

myCalc.divide(-5);
myCalc.displayResult();
myCalc.divide(0);
myCalc.displayResult();

myCalc.add("hullabaloo", 37);
myCalc.displayResult();