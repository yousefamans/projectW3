
function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


/*


function sliderData() {
  var sliderValue = document.getElementById("myRange").value;
  

  var priceValue = document.getElementById('price1').textContent ;
  
  var priceSlice  = priceValue.slice(8 , 14) ;

  var priceComma = priceSlice.replace(/,/g ,'') ;
  var price = parseInt(priceComma) ;

  if ( price < sliderValue) {
    document.getElementById("div1").style.display = "show";
    

  } else if ( sliderValue < price)   {
    document.getElementById("div1").style.display = "none";
    

  } 



  document.getElementById('max-price').innerHTML = sliderValue  ;

  document.getElementById('txt1').innerHTML = sliderValue  ;
}
  
*/  





