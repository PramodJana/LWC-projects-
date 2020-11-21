import { api, LightningElement } from 'lwc';

export default class LabChallenge1 extends LightningElement {
    todayTime = new Date();

    // updateTime(){
    //     let that = this;
    //     setInterval(function(){
    //         //the scope of this reference will not be available inside nested function
    //         that.todayTime = new Date();
    //         console.log(this.todayTime);
    //     },1000);
        
    // }

    privateProperty;
    @api publicProperty;

    constructor(){
        super(); //MUST
        this.privateProperty = 10;
        this.publicProperty = 20; // will not work here
        console.log('from constructor');
        console.log('privateProperty ::'+this.privateProperty);
        console.log('publicProperty ::'+this.publicProperty);
        this.updateTime();
    }

    //publicProperty will be assigned here after constructor
    connectedCallback(){
      //  this.updateTime();
      console.log('from connectedCallback');
      console.log('privateProperty ::'+this.privateProperty);
      console.log('publicProperty ::'+this.publicProperty);

    }
    updateTime(){
        
        setInterval(()=>{
            this.todayTime = new Date();
        },1000);
        
    }
}