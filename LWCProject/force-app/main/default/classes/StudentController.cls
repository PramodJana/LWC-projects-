public with sharing class StudentController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getStudents(String accId){
       String query;
       if(accId=='')
       {
          query = 'SELECT FirstName, LastName, Email, Phone, Title FROM Contact';
       }
       else{
          query = 'SELECT FirstName, LastName, Email, Phone, Title FROM Contact WHERE AccountId = :accId ';
       } 
        System.debug(query);
        List<Contact> studentList = Database.query(query);
        return studentList;
        
    }

@AuraEnabled(cacheable=true)
public static List<Account> getAccounts(){
    return [select Id,Name from Account];
}

}
