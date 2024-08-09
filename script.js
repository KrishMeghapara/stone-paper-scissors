let player;
let a;
let wins=0;
let loses=0;

function spin(player) {
  a = parseInt(Math.random() * 10);
  if (a == 0) {
    
      let com =1;
      //com seisor
      if(player==com){
          document.getElementById("textprint").innerText = "You got Draw!";
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
          
          

      }
      else if(player==2){
          document.getElementById("textprint").innerText = "You got Win";
          wins=wins+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
          
      }
      else if(player==3){
          document.getElementById("textprint").innerText = "You got Lose...";
          loses=loses+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
          
      }


  } else if (a % 2 == 0) {
      //com paper
      let com  = 2 ;
      
      if(player==com){
          document.getElementById("textprint").innerText = "You got Draw!";
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;                
          player=0;
      }
      else if(player==3){
          document.getElementById("textprint").innerText = "You got Win";
          wins=wins+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;                
          player=0;
      }
      else if(player==1){
          document.getElementById("textprint").innerText = "You got Lose...";
          loses=loses+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
      }



  } else {
      //Com stone

      let com = 3;

      if(player==com){
          document.getElementById("textprint").innerText = "You got Draw!";
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;

      }
      else if(player==1){
          document.getElementById("textprint").innerText = "You got Win";
          wins=wins+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
      }
      else if(player==2){
          document.getElementById("textprint").innerText = "You got Lose...";
          loses=loses+1;
          document.getElementById("Wins").innerText = wins;
          document.getElementById("Loses").innerText = loses;
          player=0;
      }


  }

}
function reset(){
  wins=0;
  loses=0;
  document.getElementById("Wins").innerText = wins;
  document.getElementById("Loses").innerText = loses;
  
}