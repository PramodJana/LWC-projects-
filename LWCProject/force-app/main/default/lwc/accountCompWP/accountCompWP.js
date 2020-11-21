import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class AccountCompWP extends LightningElement {
    @wire(getAllAccounts) accList;
}