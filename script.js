document.addEventListener("DOMContentLoaded", function () {


});

//beräkning av summa 1-6or och testar bonus
function calculate(event) {
    event.preventDefault();
    for (let i = 1; i <= 4; i++) {
        let elements = document.getElementsByClassName("player" + i);
        
        
        let sum = 0;
        let bonus = 0;
        let total = 0;
        for (let element of elements) {
            sum += Number(element.value);
        }
        if (sum >= 63) {
            bonus = 50;
        }
        let the_rest = document.getElementsByClassName("player" + i + "_rest");  //resten av fältens input hämtas och summeras
        for (let rest of the_rest){
            total += Number(rest.value);
        }
        total = total + sum + bonus;
        document.getElementById("player" + i + "_sum").innerHTML = sum;
        document.getElementById("player" + i + "_bonus").innerHTML = bonus;
        document.getElementById("player" + i + "_total").innerHTML = total;
    }
}


//kör calculatefunctionen när man trycker enter
document.addEventListener("keyup", function (event) {
    /* if(event.code === "Enter"){
         event.preventDefault();
         calculate(event);
     } */
    calculate(event);
});



let button_1 = document.getElementById("button_1"); //knapp för att slå tärningar

let lastDiceResult = [];  // skapar array för alla sista positioner tjarningar




//funktion för att slumpa tärningar
function throw_dice(event) {

    let remaining_throws = document.getElementById("remaining_throws");

<<<<<<< HEAD
    if (remaining_throws.innerHTML > 0) {
        remaining_throws.innerHTML -= 1;
       

        // Minskar remaining throws med ett varje gång man klickar på knappen, och kör bara funktionen om remaining_throws är större än 0. 

=======
    if (remaining_throws.innerHTML >= 0) { // Minskar remaining throws med ett varje gång man klickar på knappen,
        remaining_throws.innerHTML -= 1; //och kör bara funktionen om remaining_throws är större än 0. 

        //event.preventDefault(); - behövs ej efter att ha flyttat ut throw-knappen ur dice-form.
>>>>>>> origin/Thildes-ändringar
        let dice = 0;
        let diceResult = []; // skapar array för alla positioner tjarningar
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("check_" + i).checked) {
                dice = Math.floor(Math.random() * 6) + 1;
                for (let j = 1; j <= 6; j++) {
                    let image = document.getElementById("img_" + i);
                    if (dice == j) {
                        image.src = "img/dice_" + j + ".png";
                    }
                }
                diceResult.push(dice); // push nya values till array.
            } else {
                diceResult.push(lastDiceResult[i-1]); // push nya values till array.
            }
        }
        lastDiceResult = diceResult.slice();
        updateTable(diceResult);        
    }

<<<<<<< HEAD
    if (remaining_throws.innerHTML == 0) {  //hoppar ur funktionen throw_dice
        return;
    }

}



button_1.addEventListener("click", throw_dice); //eventlyssnare som kör funktionen throw_dice



//försök till att byta ut checkbox o klicka på bilder istället - fick det ej att funka
/*
for (let i = 1; i <= 5; i++) {
    let dice_image = document.getElementById("img_" + i)
    dice_image.addEventListener("click", function (event) {
        event.preventDefault();
        if (event.target.tagName != "IMG")
            dice = Math.floor(Math.random() * 6) + 1;
            for (let j = 1; j <= 6; j++) {

            if (dice == j) {
                dice_image.src = "img/dice_" + j + ".png";
            }

        }
    });
}

*/

let updateTable = function (diceResult) {
  const result = countDice(diceResult);
  
  for (let i = 0; i < 6; i++) {
    if (result[i] === 0) {
        document.getElementById('player1_' + (i + 1)).value = '';
    } else {
        document.getElementById('player1_' + (i + 1)).value = result[i] * (i+1);
    }
  }
}

// Skapa nu array for values hur många tärningar som visar desamma prickar.
let countDice = function(dice) {
    let values = [];
    
    for (let i = 0; i <= 5; i++) {
        values[i] = 0;
    }
    for (let current_dice of dice) {
          values[current_dice - 1]++;
    }
    console.log(values);
    return values;
};
=======
    if (remaining_throws.innerHTML == -1) { // När remaining throws är -1 så sätter vi om värdet på remaining throws till 3. 
        remaining_throws.innerHTML = 3; // I koden under så återställer vi tärningarna till 1 och gör icheckade boxar urcheckade. 

        for (let j = 1; j <= 5; j++) {
            let image = document.getElementById("img_" + j);
            image.src = "img/dice_" + 1 + ".png";
            if (document.getElementById("check_" + j).checked) {
                document.getElementById("check_" + j).checked = false;
            }
        }
    }
}



button_1.addEventListener("click", throw_dice); //eventlyssnare som kör funktionen throw_dice
>>>>>>> origin/Thildes-ändringar
