document.addEventListener("DOMContentLoaded", function(e) {
    let btnCalc = document.getElementById("calc");
    let sumField = document.getElementById("player1_sum");
    let bonusField = document.getElementById("player1_bonus");

    let player1_ones_field = document.getElementById("player1_ones");
    let player1_twos_field = document.getElementById("player1_twos");

    btnCalc.addEventListener("click", function(e) {
        let sum = 0;
        let tmp = 0;

        tmp = player1_ones_field.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_twos_field.value;
        if (!isNaN(Number(tmp))) {
            sum += Number(tmp);
        }

        sumField.value = sum;
        
        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.value = bonus;
    })
})

