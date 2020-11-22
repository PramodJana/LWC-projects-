public with sharing class ToDoController {
   @AuraEnabled
   public static string addToDo(String payload){
       Todo payloadObject = (ToDo) JSON.deserialize(payload,ToDo.class);

       SObject tsk = (SObject) Type.forName('ToDo__c').newInstance();
       tsk.put('Name', payloadObject.todoName);
       tsk.put('Done__c', payloadObject.done);

       insert tsk;

       return String.valueOf(tsk.Id);
   }

   @AuraEnabled
   public static void updateToDo(String payload){
       Todo payloadObject = (Todo) JSON.deserialize(payload,ToDo.class);

       SObject tsk = (Sobject) Type.forName('ToDo__c').newInstance();
       tsk.put('Id',payloadObject.todoId);
       tsk.put('Name',payloadObject.todoName);
       tsk.put('Done__c',payloadObject.done);

       insert tsk;

       return String.valueOf(tsk.Id);
   }






   class ToDo{
       @AuraEnabled 
       public String todoId;
       @AuraEnabled 
       public String todoName;
       @AuraEnabled 
       public String todoDate;
       @AuraEnabled 
       public String done;
   }
}
