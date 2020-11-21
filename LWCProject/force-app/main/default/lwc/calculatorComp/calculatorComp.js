import { LightningElement ,api} from 'lwc';

export default class CalculatorComp extends LightningElement {
    //properties -> private, public , global
    //public -> @api along with isExposed as false
    //global -> @api along with isExposed as true
    //decorators -> api, track, and wire
    @api firstNumber = 20; //properties name are always in camel case
    @api secondNumber = 10;
    result;

    //DOM event handlers
    handleFirstNumber(event)
    {
        this.firstNumber = event.target.value;
    }

    handleSecondNumber(event)
    {
        this.secondNumber = event.target.value;
    }

    // renderedCallback(){
    //     this.result=100;
    //     console.log('from rendereCallback'+this.result);
    // }

    add(){
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    sub(){
        this.result = this.firstNumber - this.secondNumber;
    }
    mul(){
          this.result = this.firstNumber * this.secondNumber;
    }
    div(){
        this.result = this.firstNumber / this.secondNumber;
    }

}