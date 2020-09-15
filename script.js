document.addEventListener("DOMContentLoaded", function() {
    //let btnCalc = document.getElementById("calc");
    let sumField = document.getElementById("player1_sum");
    let bonusField = document.getElementById("player1_bonus");


    let player1_1 = document.getElementById("player1_1");
    let player1_2 = document.getElementById("player1_2");
    let player1_3 = document.getElementById("player1_3");
    let player1_4 = document.getElementById("player1_4");
    let player1_5 = document.getElementById("player1_5");
    let player1_6 = document.getElementById("player1_6");


    let player1_onesToSixes = document.getElementsByClassName("p1_onesToSixes");

    player1_onesToSixes.addEventListener("change", function() {
        let sum = 0;
        let tmp = 0;

        tmp = player1_1.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_2.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_3.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_4.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_5.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_6.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        sumField.value = sum;
        
        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.value = bonus;
    })
    console.log(player1_onesToSixes);
})



