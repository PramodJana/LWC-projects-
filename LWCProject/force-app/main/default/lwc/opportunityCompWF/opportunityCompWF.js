import { LightningElement, track, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

export default class OpportunityCompWF extends LightningElement {
   
    //define an array to store the opportunity records after calculating tax on amount
   @track oppTaxList = [];// use @track decorator to make your private custom properties rective
   
    @wire(getAllOpportunities)
    wiredGetAllOpprtunities({data,error}){
        if(data)
        {
            data.forEach((opp) => {
                this.oppTaxList.push(
                    {
                        Name : opp.Name,
                        CloseDate : opp.CloseDate,
                        Amount : opp.Amount,
                        Stage : opp.StageName,
                        Tax : opp.Amount * 0.20,
                        Id : opp.Id,
                    }
                );
            });
        }
        else if(error)
        {

        }
    }
}

// 1. constructor
// 2. wired function with undefined
// 3. connectedCallback
// 4. wired function with either data oe error 