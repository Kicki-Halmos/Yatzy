document.addEventListener("DOMContentLoaded", function() { //Kicki sätter scenen
    let game = new Game();
    let button_1 = document.getElementById("button_1");

    button_1.addEventListener("click", throw_dice);
    document.addEventListener("change", function(event) {

        game.calculate_sum(); // Kallar på klassen game och funktioner som beräknar summa, bonus och totalsumma.
        game.calculate_bonus();
        game.calculate_the_rest();

    });
});

function throw_dice(event) { //Thilde
    let dice = new Dice();
    dice.random_throw(); // Kallar på klassen dice och funktion för att slumpa tärningar.

    let remaining_throws = document.getElementById("remaining_throws");

    if (remaining_throws.innerHTML >= 0) { // Minskar remaining throws med ett varje gång man klickar på knappen,
        // och kör bara funktionen om remaining_throws är större än 0. 

        remaining_throws.innerHTML -= 1;
    }

    if (remaining_throws.innerHTML == 0) {
        let button_1 = document.getElementById("button_1");
        button_1.innerHTML = "Next player!";
    }

    if (remaining_throws.innerHTML == -1) { // Återställer remaining throws.
        remaining_throws.innerHTML = 3;

        let button_1 = document.getElementById("button_1");
        button_1.innerHTML = "Throw!";

        for (let j = 1; j <= 5; j++) {
            let image = document.getElementById("img_" + j); // Återställer tärningarna och ckeckar ur boxarna. 
            image.src = "img/dice_" + 1 + ".png";
            if (document.getElementById("check_" + j).checked) {
                document.getElementById("check_" + j).checked = false;
            }
        }
    }
}