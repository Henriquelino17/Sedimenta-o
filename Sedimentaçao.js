function Cc() {
    var Tempo = document.getElementById("Tempo").value;
    
    var Sedimentação = 10/Tempo;
    var Sedimentação_2 = Sedimentação * 60;
    
    
    var round = Sedimentação_2.toFixed(2);
    var elemento = document.getElementById("C"); 
    console.log(round);
    elemento.textContent = "A Sedimentação está em  "+ round + " Cm/min";
    
    
  }
 