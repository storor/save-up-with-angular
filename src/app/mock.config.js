export function mockConfig ($provide, environmentConfig) {
  'ngInject';
  if(environmentConfig.mock){
        
    $provide.decorator('savesService', ($delegate, $timeout, moment)=>{
      $delegate.getSaves = ()=>{
        return $timeout(()=> {
          return [
            {
              amount: 1000,
              date : moment('2015-06-05')
            },{
              amount: 500,
              date : moment('2015-07-05')
            },{
              amount: 500,
              date : moment('2015-08-05')
            },{
              amount: 700,
              date : moment('2015-09-05')
            },{
              amount: 1200,
              date : moment('2015-10-05')
            }
          ];
        }, 1000);
      };
      return $delegate;      
    });
  }
}
