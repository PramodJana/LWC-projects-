import { api, LightningElement, track, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentController.getStudents';
import { CurrentPageReference } from 'lightning/navigation'
import { fireEvent } from 'c/pubsub';
//import {refreshApex} from '@salesforce/apex';
//import { idr } from 'c/studentFilter';
import getAccounts from '@salesforce/apex/StudentController.getAccounts';
export default class StudentBrowser extends LightningElement {
    @track studentList=[];
    @track account='';
    @track accountId='';
    //_wiredServerResponse;
    onfilterchange(event){
        
        this.accountId=event.detail.accId;
        alert(this.accountId);       
        //refreshApex(this._wiredServerResponse);
    }
    @wire(CurrentPageReference) pageRef;
    @wire(getStudents,{accId: '$accountId'}) //making wire function to execute dynamically
    wiredGetStudents({data,error}){
        
        //this._wiredServerResponse=data;
        if(data){
            this.studentList=[];
            data.forEach(std => {
                this.studentList.push({
                    Name: std.FirstName+' '+std.LastName,
                    Title: std.Title,
                    Phone: std.Phone,
                    Email: std.Email,
                    PhotoUrl: '/services/images/photo/00380FakePictId',
                    Id: std.Id
                })
            });
        }
       
        
    }
    handleTileClick(event){
        this.selectedStudentId=event.detail.stdId;
        alert('Tiles have recieved information '+this.selectedStudentId);

        fireEvent(this.pageRef, 'studentChange',{stdId : this.selectedStudentId});
    }
    handleStudentfilter(event){
        this.accountId = event.detail.accId;
    }
}