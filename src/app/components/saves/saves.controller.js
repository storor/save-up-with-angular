export class SavesController{
  constructor ($log, $q, savesService, goalsService) {
    'ngInject';
    
    this.savesService = savesService;
    this.goalsService = goalsService;
    this.$log = $log;
    this.$q = $q;
    
    this.isReady = "ready";
    this.saves = [];
    this.goal = 0;
    this.totalSaved = 0;
    this.donutOptions = {
      thickness: 5,
      mode: 'gauge'
    }
    this.donutData = [];
    
    this.init();
  }
  
  init(){
    this.getGoal();
    this.getSaves();    
  }
  
  getSaves(){
    this.savesService.getSaves().then((saves)=>{
      this.saves = saves;      
      this.getTotalSaved();
      this.getDonutData();
    });
  }
  
  getGoal(){
    this.goalsService.getGoal().then((goal)=>{
      this.goal = goal.amount;
      this.donutOptions.total = this.goal;
    });
  }
  
  getTotalSaved(){
    var total = 0;
    for(var save of this.saves){
      total += save.amount;
    }    
    this.totalSaved = total;
  }
  
  getDonutData(){
    this.donutData = [{
      label: 'Saved',
      value: this.totalSaved,
      color: '#5cb85c'
    }];
    this.$log.info(this.donutData);
  }  
}
