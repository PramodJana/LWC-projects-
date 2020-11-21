import { LightningElement } from 'lwc';
// import { deleteRecord } from 'lightning/uiRecordApi';
// import { refreshApex } from '@salesforce/apex';

import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities';
import getWonOpportunities from '@salesforce/apex/OpportunityController.getWonOpportunities';

const COLUMNS = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Stage', fieldName: 'StageName', type: 'text'},
    {label: 'Close Date', fieldName: 'CloseDate', type: 'text'},
    {label: 'Amount', fieldName: 'Amount', type: 'currency'},
];
export default class OpportunityCompIM extends LightningElement {

    oppList;
    oppColumns = COLUMNS;
    oppId;

//    _wiredResponse;

    // @wire(getAllOpportunities)
    // wiredGetAllOpportunities(response){
    //     this._wiredResponse = response;
    // }

    // @wire(getWonOpportunities)
    // wiredGetAllOpportunities(response){
    //     this._wiredResponse = response;
    // }




    showAllOps(){
        getAllOpportunities() //call 
        .then((response)=>{
            this.oppList = response;
            //alert(JSON.stringify(response));
        })
        .catch((issue)=>{
            alert('Problem at the server side '+ JSON.stringify(issue));
        })
    }

    showWonOps(){
        getWonOpportunities() //call 
        .then((response)=>{
            this.oppList = response;
 //           alert(JSON.stringify(response));
        })
        .catch((issue)=>{
            alert('Problem at the server side '+ JSON.stringify(issue));
        })
    }

    handleRowSelection(event){
        const rowsSelected = event.detail.selectedRows;
        this.oppId = rowsSelected[0].Id;
        alert("You have selected "+this.oppId);
        
    }
    

    // deleteSelectedRecord(){
    //     deleteRecord(this.oppId) //no semicolon
    //     .then(()=>{
    //         alert("record has been deleted");
    //         refreshApex(this._wiredResponse);
    //     })
    //     .catch(()=>{
    //         alert("Could not delete the record");
    //     })
    // }
}