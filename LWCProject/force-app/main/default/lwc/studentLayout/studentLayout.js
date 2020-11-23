import { LightningElement } from 'lwc';
import { showToast } from 'c/util';

export default class StudentLayout extends LightningElement {
    itemSelected;
    connectedCallback(){
       
        showToast(this,'WELCOME','Explore LWC Case Study','success');
    }

    handleItemSelect(event){
        this.itemSelected = event.detail.name;

    }

    get studentSelected(){
        return (this.itemSelected === 'students');
    }

    get oppReportSelected(){
        return (this.itemSelected === 'opps');
    }
    get oppgraphSelected(){
        return (this.itemSelected === 'graph');
    }
}