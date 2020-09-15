document.addEventListener("DOMContentLoaded", function() {
    
}); 


    function calculate(event){

        
        event.preventDefault();
        let sum = 0;
        let tmp = 0;
        let bonus = 0;

        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 6; j++){
                tmp = document.getElementById("player" + i + "_" + j).value;
                if (typeof(Number(tmp)) === "number") {
                    sum += Number(tmp);
                    if(sum >= 63){
                        bonus = 50;
                    }

                } 
            }
          
            document.getElementById("player" + i + "_sum").value= sum;
            document.getElementById("player" + i + "_bonus").value= bonus;
        }
    }

  
    
    document.addEventListener("change", calculate);

    let button_1= document.getElementById("button_1");
   let input = document.getElementById("input");

    function throw_dice(event) {
        event.preventDefault();
        let dice=0;
        
        
        for (let i=1; i<=5; i++)
        {
            if (! document.getElementById("check_" +i).checked){
            dice=Math.floor(Math.random() * 6) + 1;
            document.getElementById("input_" + i ).value  = dice;
            }
        }

        
    }

   button_1.addEventListener("click", throw_dice);



/*      
     /* tmp = player1_1.value;
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

    }*/
 
    
    




