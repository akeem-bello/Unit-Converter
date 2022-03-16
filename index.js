    function convert(){
     var value = document.getElementById("inp1").value; 
     var selector1 = document.getElementById("unitSelector1").value; 
     var selector2 = document.getElementById("unitSelector2").value;
     
   if(selector1 == "Kilometre" && selector2 == "Metre"){
       let result = value * 1000;
       inp2.value = result;
   }else if(selector1 == "Kilometre" && selector2 == "Centimetre"){
        let result = value * 100000;
        inp2.value = result;
   }else if(selector1 == "Kilometre" && selector2 == "Foot"){
        let result = value * 3280.84;
        inp2.value = result;
   }else if(selector1 == "Kilometre" && selector2 == "Kilometre"){
     let result = value;
     inp2.value = result;
   }  

   
   if(selector1 == "Metre" && selector2 == "Metre"){
     let result = value;
     inp2.value = result;
 }else if(selector1 == "Metre" && selector2 == "Centimetre"){
      let result = value * 100;
      inp2.value = result;
 }else if(selector1 == "Metre" && selector2 == "Foot"){
      let result = value * 3.281;
      inp2.value = result;
 }else if(selector1 == "Metre" && selector2 == "Kilometre"){
   let result = value / 1000;
   inp2.value = result;
 } 


     if(selector1 == "Centimetre" && selector2 == "Metre"){
       let result = value / 100;
       inp2.value = result;
   }else if(selector1 == "Centimetre" && selector2 == "Centimetre"){
        let result = value;
        inp2.value = result;
   }else if(selector1 == "Centimetre" && selector2 == "Foot"){
        let result = value / 30.48;
        inp2.value = result;
   }else if(selector1 == "Centimetre" && selector2 == "Kilometre"){
     let result = value / 100000;
     inp2.value = result;
   } 
     

   if(selector1 == "Foot" && selector2 == "Metre"){
       let result = value / 3.281;
       inp2.value = result;
   }else if(selector1 == "Foot" && selector2 == "Centimetre"){
        let result = value * 30.48;
        inp2.value = result;
   }else if(selector1 == "Foot" && selector2 == "Foot"){
        let result = value;
        inp2.value = result;
   }else if(selector1 == "Foot" && selector2 == "Kilometre"){
     let result = value / 3281;
     inp2.value = result;
   } 
}
