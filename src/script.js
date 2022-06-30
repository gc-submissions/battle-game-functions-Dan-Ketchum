"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = (health) => {
  return (health -= randomDamage());
};
//the () after randomDamage makes it a function not value

const logHealth = (player, health) => {
  return `${player} health: ${health}`;
};
console.log(logHealth("Daniel", 55));

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// const isDead = (health) => {
//     return health <= 0 ? true : false;
//   };

//More concise
const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health));
      {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

console.log(chooseOption("Dan", "Mitch"));
