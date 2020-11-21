import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const showToast  = (thisArg,toastTitle,toastMessage,toastVariant)=>{
    const eventRef = new ShowToastEvent({title: toastTitle,
                                        message: toastMessage,
                                        variant: toastVariant});

        thisArg.dispatchEvent(eventRef);
}


export{
    showToast
}