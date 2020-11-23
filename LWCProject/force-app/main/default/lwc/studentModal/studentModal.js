import { api, LightningElement } from 'lwc';

export default class StudentModal extends LightningElement {
    @api title='title';
    @api message='message';
    closeModal(){
        const divRef = this.template.querySelector('div');
        divRef.classList.add('slds-hide');
    }
}