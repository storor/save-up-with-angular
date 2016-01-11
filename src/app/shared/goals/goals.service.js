import {FirebaseService} from '../firebase-service';

export class GoalsService extends FirebaseService{
  constructor ($log, $timeout, environmentConfig, $firebaseObject) {
    'ngInject';
    super($log, $timeout, environmentConfig);
    this.path = 'goal';
    this.$firebaseObject = $firebaseObject;    
  }  
  
  getGoal(){
    return this.$firebaseObject(this.firebase).$loaded();
  }
  
  commit(goal){
    return goal.$save();
  }
}
