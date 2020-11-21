public with sharing class StudentController {
 @AuraEnabled(cacheable=true)
 public static List<Contact> getStudents(String accId){
     String query;
     List<Contact> conList;
     if((accId == '')||(accId == null))
     {
         query = 'select FirstName, LastName, Email,Phone, Title from Contact';
     }
     else {
        query = 'select FirstName, LastName, Email,Phone, Title from Contact '+
                'where AccountId = '+accId;
     }
     try {
        conList = Database.query(query);
     } catch (Exception e) {
         throw new AuraHandledException(e.getMessage());
     }
     return conList;
 }
}
