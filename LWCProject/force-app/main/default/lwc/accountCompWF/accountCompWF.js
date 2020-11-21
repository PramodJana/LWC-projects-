import { LightningElement, track, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class AccountCompWF extends LightningElement {
    @track accTaxList = [];

    @wire(getAllAccounts)
    wiredGetAllAccounts({data,error}){
        if(data)
        {
            data.forEach((acc) => {
                this.accTaxList.push(
                    {
                        Name:acc.Name,
                        type:acc.Type,
                        industry: acc.Industry,
                        Employee: acc.NumberOfEmployees,
                        tax: acc.AnnualRevenue * 0.1,
                        id:acc.Id,
                    }

                );              
            });
        }
        else if(error)
        {

        }
    }
}