

var b = Math.floor(Math.random()*11);



//var a = prompt("Please input your score?");
//
var guess = 1; 
   
document.getElementById("submitguess").onclick = function(){ 
    var a = document.getElementById("guessField").value;


        if (a==b){
            alert("Bingo!! You win!");
           }

           else if(a > b){
               guess++;
                alert("The score is too high!")
            }
            
            else if(a < b){
                guess++;
                alert("The score is too low!")
            }
            
            
        }
