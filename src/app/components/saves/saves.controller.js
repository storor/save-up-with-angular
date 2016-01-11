export class SavesController{
  constructor ($log, $q, goalsService) {
    'ngInject';
    
    this.goalsService = goalsService;
    this.$log = $log;
    this.$q = $q;
    this.newDate = new Date();
    this.isReady = "ready";
    this.goal = {
      saves: []
    };
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
    
       
  }
  
  init(){
    this.goalsService.init();
    this.getGoal();
  }
  
  getGoal(){
    this.goalsService.getGoal().then((goal)=>{
      this.goal = goal;
    });
  }
  
  totalSaved(){
    var total = 0;
    for(var save of this.goal.saves){
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
    this.goal.saves.push({
      date: this.newDate.getTime(),
      amount: +this.newSave
    });
    
    this.goalsService.commit(this.goal);    
  }
}
