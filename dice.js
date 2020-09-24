class Dice {
    constructor() {
        this.dice = [1,2,3,4,5];
    }
    random_throw() {
        let die = 0;
        for (let element of this.dice) {
            if (!document.getElementById("check_" + element).checked) {
                die = Math.floor(Math.random() * 6) + 1;
                let image = document.getElementById("img_" + element);
                image.src = "img/dice_" + die + ".png";
                //diceResult.push(dice); // push nya values till array.
            } //else {
                //diceResult.push(lastDiceResult[i-1]); // push nya values till array.
            //}
        }
        //lastDiceResult = diceResult.slice();
        //updateTable(diceResult);     
    }
}
