/*global Firebase:false*/
export class FirebaseService{
  constructor ($log, $timeout, environmentConfig) {
    'ngInject';
    this.$log = $log;
    this.$timeout = $timeout;
    this.environmentConfig = environmentConfig;
  }
  
  init(){
    this.firebase = new Firebase(`${this.environmentConfig.firebase}/${this.path}`);    
  }
  
  wrap(result){
    return this.$timeout( ()=> result, 0 );
  }
}
