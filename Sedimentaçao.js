function Cc() {
    
  
    var Check = document.getElementById("scales"); 
    var Check2 = document.getElementById("horns"); 
    //var Check =  10 ;
    //var Check2 = 20 ;
    //console.log (Check);
    //console.log (Check2);
    if (Check2.checked){
      var Tempo = document.getElementById("Tempo").value;
    
      var Sedimentação = 6.7/Tempo;
      var Sedimentação_2 = Sedimentação * 60;
    
    
      var round = Sedimentação_2.toFixed(2);
      var elemento = document.getElementById("C"); 
    //console.log(round);
    elemento.textContent = "A Sedimentação está em  "+ round + " Cm/min";
    }else{
      

  
    var Tempo = document.getElementById("Tempo").value;
    
    var Sedimentação = 6.7/Tempo;
    var Sedimentação_2 = Sedimentação * 60;
    
    
    var round = Sedimentação_2.toFixed(2);
    var elemento = document.getElementById("C"); 
    //console.log(round);
    elemento.textContent = "A Sedimentação está em  "+ round + " Cm/min";
    
    
  }
}
