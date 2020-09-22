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





//funktion för att slumpa tärningar
function throw_dice(event) {

    let remaining_throws = document.getElementById("remaining_throws");

    if (remaining_throws.innerHTML > 0) {
        remaining_throws.innerHTML -= 1;
       

        // Minskar remaining throws med ett varje gång man klickar på knappen, och kör bara funktionen om remaining_throws är större än 0. 

        let dice = 0;
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("check_" + i).checked) {
                dice = Math.floor(Math.random() * 6) + 1;
                for (let j = 1; j <= 6; j++) {
                    let image = document.getElementById("img_" + i);
                    if (dice == j) {
                        image.src = "img/dice_" + j + ".png";
                    }

                }
            }
        }
        
    }

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