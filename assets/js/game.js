var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

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

 // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
 enemyHealth = enemyHealth - playerAttack;

 // log a resulting message to the console  so we know that it worked.
 console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
 );

 // check enemy's health
 if (enemyHealth)

 // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
 playerHealth = playerHealth - enemyAttack;

  // log a resulting message to the console  so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  
