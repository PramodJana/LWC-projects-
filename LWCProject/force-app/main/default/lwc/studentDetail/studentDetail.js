import { LightningElement,wire } from 'lwc';
import {CurrentPageReference } from 'lightning/navigation'

import {registerListener} from 'c/pubsub';

export default class StudentDetail extends LightningElement {
    selectedStudentId;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('studentChange',this.handleStudentChange,this);

    }

    handleStudentChange(event){
        this.selectedStudentId = event.stdId;
    }
}