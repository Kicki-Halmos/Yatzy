
class Dices{
    constructor(){
        
    }
}
/*class yatzy {
    constructor(player, sum, bonus, total) {
        this.player = player;
        this.sum = sum;
        this.bonus = bonus;
        this.total = total;

        
    }
    calculate(event) {
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

}*/
