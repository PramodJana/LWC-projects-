import { LightningElement,wire } from 'lwc';
import {CurrentPageReference , NavigationMixin} from 'lightning/navigation'
// import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
// import LASTNAME from '@salesforce/schema/Contact.LastName';
// import EMAIL from '@salesforce/schema/Contact.Email';
// import MAILINGCITY from '@salesforce/schema/Contact.MailingCity';
// import MAILINGCOUNTRY from '@salesforce/schema/Contact.MailingCountry';
// import Phone from '@salesforce/schema/Contact.Phone';

import {registerListener} from 'c/pubsub';

export default class StudentDetail extends NavigationMixin(LightningElement) {
    selectedStudentId='';
    // //dynamic schema
    // contactFields = [FIRSTNAME,LASTNAME,EMAIL,MAILINGCITY,MAILINGCOUNTRY,Phone];
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('studentChange',this.handleStudentChange,this);

    }

    handleStudentChange(event){
        this.selectedStudentId = event.stdId;
    }

    viewStudentRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName : 'Contact',
                recordId: this.selectedStudentId,
                actionName:'view',
            },
        });
    }

    
    editStudentRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                objectApiName : 'Contact',
                recordId: this.selectedStudentId,
                actionName:'edit',
            },
        });
    }

    
    createStudentRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'Contact',
                actionName:'new',
            },
        });
    }
}