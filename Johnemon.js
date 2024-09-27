const names = [
    'Olivia',
    'Nora',
    'Diana',
    'Mohab',
    'Lyne',
    'Jason',
    'Sébastien',
    'Cristelle',
    'Farid',
    'Thibault',
    'Edouard',
    'Mbogle',
    'Benjamin',
    'Matteo',
    'Reda',
    'Donatien',
    'Renaud',
    'Anotine',
    'Nahimana',
    'Stéphen',
    'Mohamed',
    'Hakim',
    'Pierre',
    'Hugo',
    'Théo',
    'Maxime'
];

const catchPhrases = [
    'I choose you!',
    'Take the stage!',
    'Go!',
    'Come out, my friend!',
    'By my side!'
];

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function usageTypeRandomNb(type){
    let typeMin;
    let typeMax;

    switch(type) {
        case 'attack' :
            typeMin = 1;
            typeMax = 8;
            break;
        case 'defense' :
            typeMin = 1;
            typeMax = 3;
            break;
        case 'health' :
            typeMin = 10;
            typeMax = 30;
            break;
        case 'evolve' :
            typeMin = 1;
            typeMax = 5;
    }

    return randomBetween(typeMin, typeMax);
}

class Johnemon {
    constructor(name = '', level = 1, experienceMeter = 0) {
        this.name = name;
        this.level = level;
        this.experienceMeter = experienceMeter;
        this.attackRange = usageTypeRandomNb('attack');
        this. defenseRange = usageTypeRandomNb('defense');
        this.healthPool = usageTypeRandomNb('health');
        this.catchPhrase = catchPhrases[randomBetween(0, catchPhrases.length)];
        this.originalHealth = this.healthPool;
    }

    nameGeneration() {
        // names picked randomly
        const firstNamePicked = names[randomBetween(0, names.length)];
        console.log(firstNamePicked);
        const secondNamePicked = names[randomBetween(0, names.length)];
        console.log(secondNamePicked);
        //pick a part of each name randomly
        const firstNamePart = Math.random() < 0.5 ?
            firstNamePicked.slice(0, Math.ceil(firstNamePicked.length / 2))
            : firstNamePicked.slice(Math.ceil(firstNamePicked.length / 2));
        const secondNamePart = Math.random() < 0.5 ?
            secondNamePicked.slice(0, Math.ceil(secondNamePicked.length / 2))
            : secondNamePicked.slice(Math.ceil(secondNamePicked.length / 2));
        //concatenate picked parts randomly
        this.name = Math.random() < 0.5
            ? firstNamePart + secondNamePart
            : secondNamePart + firstNamePart;
        console.log(`Your johnemon's name: ${this.name}`);
        return this.name;
    }

    attack(attacker, defender) {
        let damageDone = randomBetween(defender.defenseRange, (attacker.attackRange * attacker.level));
        console.log(`Damage done: ${damageDone}`);
        defender.healthPool -= damageDone;
        console.log(`${defender.name}'s remaining health: ${defender.healthPool}`);
    }

    gainExperience(attacker, defender) {
        const experienceGained = randomBetween(1, (5 * defender.level));
        attacker.experienceMeter += experienceGained;
        console.log(`${attacker.name}'s exp points gained: ${experienceGained}`);
        console.log(`${attacker.name}'s exp meter: ${attacker.experienceMeter}`);
    }

    sayingCatchPhrase() {
        console.log(`${this.name}: '${this.catchPhrase}'`);
    }

    evolving() {
        if(this.experienceMeter === (this.level * 100)) {
            this.level++;
            this.attackRange += usageTypeRandomNb('evolve');
            this.defenseRange += usageTypeRandomNb('evolve');
            this.healthPool += usageTypeRandomNb('evolve');
            console.log(`Congratulations, ${this.name} has evolved ! Its changed stats are: `);
            console.log(`Attack range: ${this.attackRange}`+ '. ' +
                `Defense range : ${this.defenseRange}` + '. ' +
                `Health pool: ${this.healthPool}` + '. ' +
                `Level: ${this.level}` + '.');
        } else {
            console.log(`${this.name} can't evolve yet... Gain more experience.`);
        }
    }
}


module.exports = Johnemon

// Tests
// const firstPokemon = new Johnemon();
// const attacker = new Johnemon();
// const defender = new Johnemon();
// firstPokemon.nameGeneration();
// attacker.nameGeneration();
// defender.nameGeneration();
// console.log(firstPokemon);
// console.log(attacker);
// console.log(defender);
//
// attacker.attack(attacker, defender);
// attacker.gainExperience(attacker, defender);
// firstPokemon.sayingCatchPhrase();
// attacker.sayingCatchPhrase();
// defender.sayingCatchPhrase();
// firstPokemon.evolving();
// console.log(`${defender.name} original health: ${defender.originalHealth}`);