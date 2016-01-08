export class SavesController{
  constructor ($log, $q, savesService, goalsService) {
    'ngInject';
    
    this.savesService = savesService;
    this.goalsService = goalsService;
    this.$log = $log;
    this.$q = $q;
    
    this.isReady = "ready";
    this.saves = [];
    this.goal = {};
    this.donutOptions = {
      thickness: 5,
      mode: 'gauge',
      total: this.goal.amount
    }
    this.donutData = [{
      label: 'Saved',
      value: this.totalSaved(),
      color: '#5cb85c'
    }]
    
    this.init();
    
    this.options = {
      margin: {top: 5},
      series: [
        {
          axis: "y",
          dataset: "saves",
          key: "amount",
          label: "Saves",
          color: "hsla(88, 48%, 48%, 1)",
          type: ["dot", "line", "area"],
          id: "mySeries0"
        }
      ],
      axes: {
        x: {
          key: 'date',
          type: 'date'
        },
        y: {
          min: 0
        }
      }
    };
    
    this.data = {
      saves: this.saves
    };   
  }
  
  init(){
    this.getGoal();
    this.getSaves();    
  }
  
  getSaves(){
    this.savesService.getSaves().then((saves)=>{
      this.saves.push.apply(this.saves, saves);      
    });
  }
  
  getGoal(){
    this.goalsService.getGoal().then((goal)=>{
      this.goal = goal;
    });
  }
  
  totalSaved(){
    var total = 0;
    for(var save of this.saves){
      total += save.amount;
    }  
    this.$log.info(total);  
    return total;
  }
  
  getDonutData(){
    this.donutData[0].value = this.totalSaved()
    return this.donutData;
  }
  
  getDonutOptions(){
    this.donutOptions.total = this.goal.amount;
    return this.donutOptions;
  }
  
  save(){
    this.saves.push({
      date: new Date(),
      amount: +this.newSave
    });
  }
}
