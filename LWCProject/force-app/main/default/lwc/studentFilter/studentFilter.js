import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/StudentController.getAccounts';

export default class StudentFilter extends LightningElement {
    @track accCombList = [];
    @track selectedAccountId = '';

    @wire(getAccounts)
    wiredGetAccounts({data,error}){
       this.accCombList = []; //good practice
       if(data){
            data.forEach(acc=>{
                this.accCombList.push(
                    {
                        label: acc.Name,
                        value: acc.Id
                    }
                );
             //console.log(JSON.stringify(data));  
            // console.log(JSON.stringify(this.accCombList));  
            });
       }else if (error){ 
           //..
       }
    }

    onAccountChange(event){
        this.selectedAccountId = event.target.value;
        this.notifyParent();
    }

    notifyParent(){
        const eventRef = new CustomEvent("studentfilter",
                                    {detail : 
                                              { 
                                                accId: this.selectedAccountId 
                                              }
                                     });
        this.dispatchEvent(eventRef);                             
    }

}


