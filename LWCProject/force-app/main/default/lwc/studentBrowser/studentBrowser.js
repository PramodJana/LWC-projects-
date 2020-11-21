import { LightningElement, track, wire } from 'lwc';
import {CurrentPageReference } from 'lightning/navigation'
import getStudents from '@salesforce/apex/StudentController.getStudents';
import {fireEvent} from 'c/pubsub';

export default class StudentBrowser extends LightningElement {

    @wire(CurrentPageReference) pageRef;
    
    @track studentList = [];
    accountId = '';

    @wire(getStudents,{accId : '$accountId'})// making wire function to execute dynamically
    wiredGetStudents({data,error}){
        if(data){
            data.forEach(std => {
                this.studentList.push({
                    Name : std.FirstName+' '+std.LastName,
                    Title : std.Title,
                    Phone : std.Phone,
                    Email : std.Email,
                    PhotoUrl : '/services/images/photo/00300FakePictId',
                    Id : std.Id,
                });
            });
        }
        else if(error){
            //code
        }
    }// end of wired

    handleTileClick(event){
        this.selectedStudentId = event.detail.stdId;
        alert('browser has received information '+this.selectedStudentId);

        fireEvent(this.pageRef,'studentChange',{stdId: this.selectedStudentId});
    }
}//end of class