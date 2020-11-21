public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true) //No DML inside this method
    public static List<Opportunity> getAllOpportunities(){

      return [SELECT Name, StageName, CloseDate, Amount FROM Opportunity];
  }

  @AuraEnabled(cacheable=true) //No DML inside this method
  public static List<Opportunity> getWonOpportunities(){
    return [SELECT Name, StageName, CloseDate, Amount FROM Opportunity
    where StageName='CLosed Won'];
}

@AuraEnabled
public static void deleteOpportunityRecord(Id opportunityId){
  try{
    List<Opportunity> oppList =
    [select Name
    from Opportunity
    where Id =: opportunityId];
    delete oppList;
  }
  catch(Exception e)
  {
    throw new AuraHandledException(e.getMessage());
  }
}
}

