var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function() {
    // Alert players that htey are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.

    // log a resulting message to the console so we know that it worked.

    // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

    // log a resulting message to the console  so we know that it worked.
};

// execute function
fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

console.log(promptFight);

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

 // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
 enemyHealth = enemyHealth - playerAttack;

 // log a resulting message to the console  so we know that it worked.
 console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
 );

 // check enemy's health
 if (enemyHealth <= 0) {
  window.alert(enemyName + " has died ");
 }

 else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
 }

 // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
 playerHealth = playerHealth - enemyAttack;

  // log a resulting message to the console  so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }

  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // if player chooses to SKIP
} else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }

   // if no (false), ask question again by running fight() again
   else {
    fight();
  }
  } else {
  window.alert("you must choose a valid option. Try again!")
}