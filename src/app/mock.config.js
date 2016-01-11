export function mockConfig ($provide, environmentConfig) {
  'ngInject';
  if(environmentConfig.mock){
    
    $provide.decorator('goalsService', ($delegate, $timeout, $log,  moment)=>{
      $delegate.init = ()=> {};
      var saves = [
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
      $delegate.getGoal = ()=>{
        return $timeout(()=> {
          return {
              amount: 20000,
              date : moment('2016-07-05').toDate(),
              saves: saves
            }
        }, 1000);
      };
      $delegate.commit = ()=>{
        $log.info('commited changes');
      }
      return $delegate;      
    });
  }
}
