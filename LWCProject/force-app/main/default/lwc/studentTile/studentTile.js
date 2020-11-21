import { api, LightningElement } from 'lwc';

export default class StudentTile extends LightningElement {
   @api student /*={
        Name: 'Pramod',
        PhotoUrl:'/services/images/photo/00380FakePictId'
    }*/

    handleClick(){
        alert('You Clicked on '+this.student.Id+' '+this.student.Name);
        const eventRef = new CustomEvent('tileclick',{bubbles:true, composed:true, detail: {stdId : this.student.Id}});
        this.dispatchEvent(eventRef);

    }
}