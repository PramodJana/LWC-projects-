public with sharing class AccountController {
  
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        return [SELECT Name, NumberOfEmployees, Type,AnnualRevenue,Industry FROM Account
        order by NumberOfEmployees desc
        limit 10];
    }
}
