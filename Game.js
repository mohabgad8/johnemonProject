const readline = require('readline');
const JohnemonMaster = require('./JohnemonMaster'); // Replace 'your_classes_filename' with the actual filename
const Johnemon = require('./Johnemon')
const JohnemonWorld = require ('./JohnemonWorld')
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const johnemonWonderLand = new JohnemonWorld();
let firstJohnemonMaster = null;
let selectedJohnemon = null;

function saveGameState() {
  const gameState = {
    saved_on: new Date().toISOString(),
    JohnemonMaster: {
      name: firstJohnemonMaster.name,
      johnemonCollection: firstJohnemonMaster.johnemonCollection.map(j => ({
        name: j.name,
        level: j.level,
        experienceMeter: j.experienceMeter,
        attackRange: j.attackRange,
        defenseRange: j.defenseRange,
        healthPool: j.healthPool,
        catchPhrase: j.catchPhrase,
      })),
      healingItems: firstJohnemonMaster.healingItems,
      reviveItems: firstJohnemonMaster.reviveItems,
      johneBalls: firstJohnemonMaster.johneBalls,
    },
    day: johnemonWonderLand.currentDay,
    logs: johnemonWonderLand.logs,
  };

  fs.writeFileSync('save.json', JSON.stringify(gameState, null, 2), (err) => {
    if(err) throw err;
    console.log('Game state has been saved !');
  })
}

function askForName() {
  rl.question(`What's your name ? `, (masterName) => {
    firstJohnemonMaster = new JohnemonMaster(masterName);
    console.log(`Welcome ${firstJohnemonMaster.name}, let's choose your first Johnemon.`);
    proposeFirstJohnemon();
  });
}

function proposeFirstJohnemon(){
  const johnemons = [new Johnemon(), new Johnemon(), new Johnemon()];

  johnemons.forEach((johnemon, index) => {
    console.log(`${index + 1}. Name: ${johnemon.name}, level: ${johnemon.level}, experience meter: ${johnemon.experienceMeter}, attack range: ${johnemon.attackRange}, defense range: ${johnemon.defenseRange}, health pool: ${johnemon.healthPool} and catch phrase: ${johnemon.catchPhrase}.`);
  });

  rl.question(`Choose your first Johnemon (Enter 1, 2 or 3): `, (choice) => {
    const index = parseInt(choice) - 1;

    if(index >= 0 && index < johnemons.length) {
      selectedJohnemon = johnemons[index];
      console.log(`You've chosen ${selectedJohnemon.name}`);
      saveGameState();
      startGame();
    } else {
      console.log('Invalid choice. Please select a valid Johnemon.');
      proposeFirstJohnemon();
    }
  });
}

function startGame(){
  johnemonWonderLand.oneDayPasses();
  console.log(`Current Day: ${johnemonWonderLand.currentDay}`);
  console.log('Logs: ', johnemonWonderLand.logs);
}


