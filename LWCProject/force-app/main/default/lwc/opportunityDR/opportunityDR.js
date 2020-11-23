import { LightningElement, wire } from 'lwc';
import { showToast } from 'c/util';

import deleteOpportunityRecord from '@salesforce/apex/OpportunityController.deleteOpportunityRecord';
//import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';

import getAllOpportunities from '@salesforce/apex/OpportunityController.getAllOpportunities'

const COLUMNS = [
    {label: 'Name', fieldName: 'Name', type: 'text'},
    {label: 'Stage', fieldName: 'StageName', type: 'text'},
    {label: 'Close Date', fieldName: 'CloseDate', type: 'text'},
    {label: 'Amount', fieldName: 'Amount', type: 'currency'},
];


export default class OpportunityDR extends LightningElement {
    oppList;
    oppId;
    oppColumns = COLUMNS;
    _wiredServerResponse;

    isActive = false;

    @wire(getAllOpportunities)  
    wiredGetAllOpportunities(serverResponse){   
        this._wiredServerResponse = serverResponse;
        if(serverResponse.data){
            this.oppList = serverResponse.data;
        }
    }


    deleteSelectedRow(){
        //alert("inside delete");
        //deleteRecord(this.oppId)
        deleteOpportunityRecord({opportunityId: this.oppId})
        .then(()=>{
            //alert("deleted...");
            showToast(this,'SUCCESS','Record has been deleted','success');           
            const table= this.template.querySelector('lightning-datatable'); // document.getElementById('abc');
            table.selectedRows = [];
            refreshApex(this._wiredServerResponse);
        })
        .catch(()=>{
            //alert("cloud not delete...");
            showToast(this,'Problem','Record has not been deleted','error');    
        })
    }

    
    handleRowSelection(event){
        //alert("i am inside handler refresh");
        const rowsSelected = event.detail.selectedRows;
        this.oppId = rowsSelected[0].Id;
        // if(rowsSelected.length>0){
        //     this.oppId = rowsSelected[0].Id;
        // }
        
      //  alert("You have selected "+this.oppId);
        
    }



    sendEmail(){
        this.isActive = true;
    }
}