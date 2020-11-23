import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi';

const showToast  = (thisArg,toastTitle,toastMessage,toastVariant)=>{
    const eventRef = new ShowToastEvent({title: toastTitle,
                                        message: toastMessage,
                                        variant: toastVariant});

        thisArg.dispatchEvent(eventRef);
}

const _displayValue = function(data,field){
return getFieldDisplayValue(data,field)? getFieldDisplayValue(data,field): getFieldValue(data,field);
}

export{
    showToast,
    _displayValue,
}