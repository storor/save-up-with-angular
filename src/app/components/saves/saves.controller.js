export class SavesController{
  constructor ($log, savesService) {
    'ngInject';
    
    this.savesService = savesService;
    this.$log = $log;
    
    this.isReady = "ready";
    this.saves = [];
    this.getSaves();
  }
  
  getSaves(){
    this.savesService.getSaves().then((saves)=>{
      this.saves = saves;      
    });
  }
  
  totalSaved(){
    var total = 0;
    for(var save of this.saves){
      total += save.amount;
    }
    return total;
  }
}
