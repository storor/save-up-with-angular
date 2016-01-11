export function mockConfig ($provide, environmentConfig) {
  'ngInject';
  if(environmentConfig.mock){
    
    $provide.decorator('goalsService', ($delegate, $timeout, moment)=>{
      $delegate.init = ()=> {};
      $delegate.getGoal = ()=>{
        return $timeout(()=> {
          return {
              amount: 20000,
              date : moment('2016-07-05').toDate()
            }
        }, 1000);
      };
      return $delegate;      
    });
        
    $provide.decorator('savesService', ($delegate, $timeout, moment)=>{
      $delegate.init = ()=> {};
      $delegate.getSaves = ()=>{
        return $timeout(()=> {
          return [
            {
              amount: 1000,
              date : moment('2015-06-05').toDate()
            },{
              amount: 500,
              date : moment('2015-07-05').toDate()
            },{
              amount: 500,
              date : moment('2015-08-05').toDate()
            },{
              amount: 700,
              date : moment('2015-09-05').toDate()
            },{
              amount: 1200,
              date : moment('2015-10-05').toDate()
            },{
              amount: 1200,
              date : moment('2015-10-05').toDate()
            },{
              amount: 1200,
              date : moment('2015-11-05').toDate()
            }
          ];
        }, 1000);
      };
      return $delegate;      
    });
  }
}
