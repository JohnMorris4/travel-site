import Person from './modules/Person';
var $ = require('jquery');

class Adult extends Person{
    payTaxes() {
        console.log(this.name + ' it is time to pay your taxes');
    }
}
var john = new Person("John Morris", "blue");
john.greet();
var jane = new Adult("Jane Smith", "greenish");
jane.greet();
jane.payTaxes();
