export class SavesController{
  constructor ($log, savesService, goalsService) {
    'ngInject';
    
    this.savesService = savesService;
    this.goalsService = goalsService;
    this.$log = $log;
    
    this.isReady = "ready";
    this.saves = [];
    this.goal = 0;
    
    this.getGoal();
    this.getSaves();
  }
  
  getSaves(){
    this.savesService.getSaves().then((saves)=>{
      this.saves = saves;      
    });
  }
  
  getGoal(){
    this.goalsService.getGoal().then((goal)=>{
      this.goal = goal.amount;  
    });
  }
  
  totalSaved(){
    var total = 0;
    for(var save of this.saves){
      total += save.amount;
    }
    return total;
  }
  
  percent(){
    if(this.goal){
      return ( 100 / this.goal ) * this.totalSaved();
    }
    return 0;
  }
}
