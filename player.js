class Player{
    constructor(){
        this.players = [1, 2, 3, 4];
    }

    welcome(){

        for (let player of this.players){
            player = document.getElementById("player" + player + "_name").value;
            alert("Välkommen in i spelet " + player + "!")
        }

    }
}
