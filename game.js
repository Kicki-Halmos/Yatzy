class Game { //Kicki
    constructor() {
        this.players = [1, 2, 3, 4];


    }
    calculate_sum() {  //summa 1-6 - Kicki
        for (let player of this.players) {
            let sum = 0;
            let elements = document.getElementsByClassName("player" + player);

            for (let element of elements) {
                sum += Number(element.value);

                document.getElementById("player" + player + "_sum").innerHTML = sum;

            }

        }
    }

    calculate_bonus() { //kollar bonus - Erik
        for (let player of this.players) {
            let bonus = 0;
            if (document.getElementById("player" + player + "_sum").innerHTML >= 63) {
                document.getElementById("player" + player + "_bonus").innerHTML = 50;
            }
            else{
                document.getElementById("player" + player + "_bonus").innerHTML = 0;
            }
        }
    }

    calculate_the_rest() {  //räknar ut totalen - Erik
        for (let player of this.players) {

            let sum = document.getElementById("player" + player + "_sum").innerHTML;
            let bonus = document.getElementById("player" + player + "_bonus").innerHTML;
            let total = 0;

            let the_rest = document.getElementsByClassName("player" + player + "_rest");

            for (let rest of the_rest) {
                total += Number(rest.value);

            }

            total = total + Number(sum) + Number(bonus);
            document.getElementById("player" + player + "_total").innerHTML = total;
        }
    }
}