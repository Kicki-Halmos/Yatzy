document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    let player = new Player();
    let button_1 = document.getElementById("button_1");

    button_1.addEventListener("click", throw_dice); //eventlyssnare som kör funktionen throw_dice
    document.addEventListener("change", function(event) {


        game.calculate_sum();
        game.calculate_bonus();
        game.calculate_therest();

        /*for(let i=1; i<=4; i++){

        if (event.target.id=="player" + i + "_name"){
            
            
            player.welcome();
        }
    }*/
    });

    document.getElementById("player1_name").addEventListener("change", function(event) {
        if (event.target.id == "player1_name") {
            player.welcome();
        }
    })



});








//knapp för att slå tärningar

//let lastDiceResult = [];  // skapar array för alla sista positioner tjarningar
 



//funktion för att slumpa tärningar
function throw_dice(event) {
    let dice = new Dice();
    dice.random_throw();

    let remaining_throws = document.getElementById("remaining_throws");

    if (remaining_throws.innerHTML >= 0) { // Minskar remaining throws med ett varje gång man klickar på knappen,
                                            //och kör bara funktionen om remaining_throws är större än 0. 
        
        remaining_throws.innerHTML -= 1; 

        /* 
        let dice = 0;
        //let diceResult = []; // skapar array för alla positioner tjarningar
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("check_" + i).checked) {
                dice = Math.floor(Math.random() * 6) + 1;
                for (let j = 1; j <= 6; j++) {
                    let image = document.getElementById("img_" + i);
                    if (dice == j) {
                        image.src = "img/dice_" + j + ".png";
                    }
                }
                //diceResult.push(dice); // push nya values till array.
            } //else {
                //diceResult.push(lastDiceResult[i-1]); // push nya values till array.
            //}
        }
        //lastDiceResult = diceResult.slice();
        //updateTable(diceResult);         */        
    }

    if (remaining_throws.innerHTML == 0) { // När remaining throws är -1 så sätter vi om värdet på remaining throws till 3. 
        let button_1 = document.getElementById("button_1");
        button_1.innerHTML = 'Next player!';
    }

    if (remaining_throws.innerHTML == -1) { // När remaining throws är -1 så sätter vi om värdet på remaining throws till 3. 
        remaining_throws.innerHTML = 3; // I koden under så återställer vi tärningarna till 1 och gör icheckade boxar urcheckade. 

        let button_1 = document.getElementById("button_1");
        button_1.innerHTML = 'Throw!';
        
        for (let j = 1; j <= 5; j++) {
            let image = document.getElementById("img_" + j);
            image.src = "img/dice_" + 1 + ".png";
            if (document.getElementById("check_" + j).checked) {
                document.getElementById("check_" + j).checked = false;
            }
        }
    }
}





/* let updateTable = function (diceResult) { //define function för att fyller kolumner automatisk.
    const result = countDice(diceResult);// invoke a function countDice with diceResult
    for (let i = 0; i < 6; i++) {
      if (result[i] === 0) {
          document.getElementById("player1_" + (i + 1)).value = ""; //fyller kolumner
      } else {
          document.getElementById("player1_" + (i + 1)).value = result[i] * (i+1);
      }
    }
  }
  // Skapa nu array for values hur många tärningar som visar desamma prickar.
  let countDice = function(dice) { //define function för att skriva resultaten av kast (hur många ones, twos finns)
      let values = [];
      for (let i = 0; i <= 5; i++) { // Att första let varje i på nytt array bli 0.
          values[i] = 0;
      }
      for (let current_dice of dice) { //går igenom array med tärningar positioner
            values[current_dice - 1]++; // och att skriva value oa varje element på i-element av nytt array (nytt array har 6 element-positioner men ve har 5 tärningar från första array)
      }
      console.log(values);
      return values;
  }; */