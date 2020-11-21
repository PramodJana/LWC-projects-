import { api, LightningElement } from 'lwc';

export default class StudentTiles extends LightningElement {
    @api studentList;
    selectedStudentId = '';

    handleTileClick(event){
        this.selectedStudentId = event.detail.stdId;
        alert('tiles has received information '+this.selectedStudentId);
    }
}