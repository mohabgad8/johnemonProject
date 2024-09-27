const JohnemonArena = require('./JohnemonArena')
const Johnemon = require('./Johnemon')

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class JohnemonWorld {
  constructor() {
    this.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.dayIndex = new Date().getDay();
    this.currentDay = this.weekDays[this.dayIndex];
    this.logs = [];
  }

  oneDayPasses(){
    this.dayIndex = (this.dayIndex + 1) % 7;
    this.currentDay = this.weekDays[this.dayIndex];
    this.addLog('A new day has began!');

    console.log('What do you want to do today ? Enter a number from the list: ' + '/n'
    + '*. ' + 'Heal a Johnemon.' + '/n'
    + '*. ' + 'Revive a Johnemon.' + '/n'
    + '*. ' + 'Release a Johnemon.' + '/n'
    + '*. ' + 'Rename a Johnemon.');

    rl.question('Your choice: ', (choice => {

    }));
  }

  addLog(log){
    const logFormat = `Day ${this.currentDay}: ${log}`;
    this.logs.push(logFormat);
    console.log(logFormat);
  }
}


module.exports = JohnemonWorld