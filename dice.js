class Die {
    constructor() {
        this.die = [1,2,3,4,5]


    }
    random_throw() {
        let dice = 0;
        for (let element of this.die) {
            if (!document.getElementById("check_" + element).checked) {
                dice = Math.floor(Math.random() * 6) + 1;
                for (let j = 1; j <= 6; j++) {
                    let image = document.getElementById("img_" + element);
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
        //updateTable(diceResult);        
    }
}