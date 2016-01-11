import {FirebaseService} from '../firebase-service';

export class SavesService extends FirebaseService{
  constructor ($log, $timeout, environmentConfig, $firebaseArray) {
    'ngInject';
    super($log, $timeout, environmentConfig);
    this.path = 'saves';
    this.$firebaseArray = $firebaseArray;
  }  
  
  getSaves(){
    return this.wrap(this.$firebaseArray(this.firebase));
  }  
}
