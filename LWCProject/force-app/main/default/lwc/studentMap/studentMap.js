import { LightningElement, track, wire,api } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import MAILINGCITY from '@salesforce/schema/Contact.MailingCity';
import MAILINGCOUNTRY from '@salesforce/schema/Contact.MailingCountry';

import {_displayValue} from 'c/util';
const fields = [MAILINGCITY,MAILINGCOUNTRY];

export default class StudentMap extends LightningElement {
    @api selectedStudentId='';
    @track studentMapMarkers = [];
    //fieldNames = ['MailingCity','MailingCountry'];
    @wire(getRecord,{recordId:'$selectedStudentId',fields})
    wireGetRecord({data}){
        const City = _displayValue(data,MAILINGCITY);
        const Country = _displayValue(data,MAILINGCOUNTRY);
        this.studentMapMarkers = []; //good practise
        if(data){
            this.studentMapMarkers.push({
                location:{
                    City,
                    Country ,
                },
                description:`Coords - ${City} :: ${Country}`,
            });
        }
        console.log(this.studentMapMarkers.location+" "+ JSON.stringify(data));
    }
   

}