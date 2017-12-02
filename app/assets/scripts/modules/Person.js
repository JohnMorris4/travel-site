class Person {
    constructor(fullName, favColor){
        this.name = fullName;
        this.color = favColor;
    }
    
    greet(){
        console.log("Howdy my name is " + this.name + " my favorite color is " + this.color);
    }
}
export default Person;