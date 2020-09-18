document.addEventListener("DOMContentLoaded", function() {
    

}); 

function calculate(event){
    event.preventDefault();
    for (let i =1; i<=4; i++){
        let elements = document.getElementsByClassName("player" + i);
        let sum = 0;
        let bonus = 0;
        for(let element of elements){
            sum += Number(element.value);
           }
           if(sum >= 63){
            bonus = 50;
        }
    document.getElementById("player" + i + "_sum").innerHTML= sum;
    document.getElementById("player" + i + "_bonus").innerHTML= bonus;

    }
}   /*
    function calculate(event){
     event.preventDefault();
      

        for (let i = 1; i <= 4; i++) {
            let sum = 0;
            let tmp = 0;
            let bonus = 0;
            for (let j = 1; j <= 6; j++){
                tmp = document.getElementById("player" + i + "_" + j).value;
                if (typeof(Number(tmp)) === "number") {
                    sum += Number(tmp);
                    if(sum >= 63){
                        bonus = 50;
                    }
                  
                } 
          
            }
            document.getElementById("player" + i + "_sum").innerHTML= sum;
            document.getElementById("player" + i + "_bonus").innerHTML= bonus;
        }
    }*/

  
    
    document.addEventListener("change", calculate);

    let button_1= document.getElementById("button_1");
    

    function throw_dice(event) {
        event.preventDefault();
        let dice=0;
        
        
        for (let i=1; i<=5; i++)
        {
            if (! document.getElementById("check_" +i).checked){
            dice = Math.floor(Math.random() * 6) + 1;
            for (let j=1; j<=6; j++){
                let image = document.getElementById("img_" + i);
                if (dice == j)
                {
                    image.src = "img/dice_" + j + ".png";
                }
            }
        }
    }

        
    }

   button_1.addEventListener("click", throw_dice);




 
    
    




