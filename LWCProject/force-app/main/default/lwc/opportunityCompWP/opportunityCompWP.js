import { LightningElement, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';

export default class OpportunityCompWP extends LightningElement {
    @wire(getAllOpportunities) oppList; //data,error
}