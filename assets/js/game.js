// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var test = function() {
    var response = prompt ("Questio?");
    if  (response === "" || response === null){
        window.alert("You need to provide a valid answer! Please try again.");
        test();
    }
    return response;
}
var fightOrSkip = function() {
    //ask player i they like to fight or skip
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();
    // enter the conditional recursive function call here!
    if (promptFight === "" || promptFight === null) {
        window.alert("you need to provide a valid answer! please try again.");
        return fightOrSkip();
    }
    if (promptFight ==="skip") {
        //confirm player want to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes (true), leave fight
        if  (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract mone rom playerMoney or skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
}
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * max - min + 1) + min;
  
    return value;
  };
//function to get player name
var getPlayerName = function() {
    var name = "";
    //loop start
    while(name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }
    //loop end
    console.log("Your robot's name is " + name);
    return name;
};  
var playerInfo = {
name: getPlayerName(),
Health: 100,
attack: 10,
mone: 10,
reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
  }
};

// You can also lo multiple values at once like thi console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var enemyInfo = [
    {
      name: "Roborto",
      attack: 12,
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: 13,
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: 14,
      attack: randomNumber(10, 14)
    }
  ];

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd liked to fight or run
      if (fightOrSkip()) {
          //if true, leave fight by breaking loop
          break;
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
    
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemy.attack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);


      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        endGame()
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };
  //Function to start a new game
  var startGame = function() {
      //player stat reset
      playerInfo.reset();
for(var i = 0; i < enemyInfo.length
    ; i++){
    if (playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
    
        // pick new enemy to fight based on the index of the enemy.names array
        var pickedEnemyObj = enemyInfo[i];
    
        // reset enemy.health before starting new fight
        pickedEnemyObj.health = randomNumber(40, 60);                                                                       
    
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
    
        // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
        fight(pickedEnemyObj);
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          
            // if yes, take them to the store() function
            if (storeConfirm) {
              shop();
            }
          }

      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
}
endGame;
  };
  //end of tart game F
  // start of end game F
  var endGame = function() {
      //if player still alive, player wins!
      if (playerInfo.health > 0 ) {
          window.alert("Great job, you've suvived the game! you now have a score of " + playerInfo.money + ".")
      }
      else{
      window.alert("You've lost your robot in battle.");
      }
      //asking player if they want to play again.
      var playAgainConfirm = window.confirm("would you like to play again?");
      if (playAgainConfirm) {
          //restart the game
          startGame();
      }
      else {
        window.alert("Thak you or playing Robot Gladiators! come back soon!");
      }
  };
  //end of end game F
  //start of shop F
  var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
      );
      shopOptionPrompt = parseInt(shopOptionPrompt);
      //use switch to carry out action
      switch (shopOptionPrompt){
          case 1:
              //increase health and decrease money
              playerInfo.refillHealth();
              break;
          case 2:
              //increase attack and decrease money
              playerInfo.upgradeAttack();
              break;
          case 3:
              window.alert("Leaving the store.");

              //do nothing, do function wll end
              break;
          default:
              window.alert("You did not pick a valid option. Try again.");

              //call shop() again to force player to pick a valid option
              shop();
              break;
      }
  };
  //end of shop F
  startGame();