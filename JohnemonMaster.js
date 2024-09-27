const Johnemon = require('./Johnemon')
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class JohnemonMaster {
  constructor(name) {
    this.name = name;
    this.johnemonCollection = [];
    this.healingItems = 5; // Initial number of healing items
    this.reviveItems = 3; // Initial number of revive items
    this.johneBalls = 10; // Initial number of JOHNEBALLS
  }

  healJohnemon(johnemon, johnemonMaster) {
    johnemon.healthPool = johnemon.originalHealth;
    johnemonMaster.healingItems--;
  }

  reviveJohnemon(johnemon, johnemonMaster) {
    johnemon.healthPool = johnemon.originalHealth;
    johnemonMaster.reviveItems--;
  }

  catchJohnemon(johnemon) {
    this.johnemonCollection.push(johnemon);
    this.johneBalls--;
    console.log(`You've catched a new johnemon: ${johnemon.name}`);
    console.log(johnemon);
  }

  releaseJohnemon(johnemon) {
    let index = this.johnemonCollection.findIndex(johnemon => johnemon.name === johnemon);

    if(index !== -1) {
      const releasedJohnemon = this.johnemonCollection.splice(index, 1);
      console.log(`You've released your johnemon: ${johnemon.name}`);
      console.log(releasedJohnemon);
    } else {
      console.log(`${johnemon.name} wasn't found in your collection.`);
    }

    console.log(`You've lost your johnemon: ${johnemon.name}`);
    console.log(johnemon);
  }

  renameJohnemon(johnemon) {
    let i = this.johnemonCollection.findIndex(johnemon => johnemon.name === johnemon);

    if(i !== -1) {
      rl.question(`Enter the new name for your Johnemon: `, (newName => {
        this.johnemonCollection[i].name = newName;
        console.log('Your Johnemon has been named successfully !');
      }));
    } else {
      console.log(`${johnemon.name} wasn't found in your collection, try again.`);
      this.renameJohnemon();
    }
  }

  showCollection() {
    console.log('Your johnemon collection: ' + '/n');

    for(let i = 0; i < this.johnemonCollection.length; i++) {
      console.log(i + 1 + '. ' + this.johnemonCollection[i]);
    }
  }
}

module.exports = JohnemonMaster
