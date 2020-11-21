import { LightningElement } from 'lwc';
import { showToast } from 'c/util';

export default class StudentLayout extends LightningElement {
    connectedCallback(){
       
        showToast(this,'WELCOME','Explore LWC Case Study','success');
    }
}