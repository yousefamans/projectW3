



function phoneData2(idIndex, sortedPhoneListIndex,listName) {
  document.getElementById('phone'+idIndex).innerHTML =  listName[sortedPhoneListIndex].name  ;
  document.getElementById('price'+idIndex).innerHTML = "Price: " + "<span class='price-color'>"+listName[sortedPhoneListIndex].price + "</span><br><s class="+"beforePrice"+">  " + listName[sortedPhoneListIndex].normalPrice+"</s>" ;
  document.getElementById('difference'+idIndex).innerHTML = "<span class='discount-color'>" + listName[sortedPhoneListIndex].percent + "</span>% Off" ;
  document.getElementById('img'+idIndex).src =  listName[sortedPhoneListIndex].img  ;
  document.getElementById('linkBtn'+idIndex).href =  listName[sortedPhoneListIndex].linkUrl  ;
  document.getElementById('color'+idIndex).style.backgroundColor =  listName[sortedPhoneListIndex].color  ;
  if (listName[sortedPhoneListIndex].brand == "e"){
      document.getElementById('brand'+idIndex).src =  "/img/ebay.jpg"  ;
  } else if (listName[sortedPhoneListIndex].brand == "a") {
      document.getElementById('brand'+idIndex).src = '/img/amazon.jpg' ;
  }

}
   





function elementJS(ids) {
        

        var aTag = document.createElement("a");
        aTag.innerHTML = "name";
        
        aTag.setAttribute("class","link-txt");
        aTag.setAttribute("id","name"+ids);

        document.getElementById('box'+ids).appendChild(aTag);

        var price_value = document.createElement("p");
        price_value.innerHTML = "price";
        price_value.setAttribute("class","price-value");
        price_value.setAttribute("id","price-se"+ids);
        document.getElementById('box'+ids).appendChild(price_value);

        var normalPrice_Ptag = document.createElement("p");
        
        normalPrice_Ptag.setAttribute("class","normal-price");
        normalPrice_Ptag.setAttribute("id","normal-price"+ids);
        document.getElementById('box'+ids).appendChild(normalPrice_Ptag);

        var discount_Tag = document.createElement("p");
        
        discount_Tag.setAttribute("class","discount");
        discount_Tag.setAttribute("id","discount"+ids);
        document.getElementById('box'+ids).appendChild(discount_Tag);


        var brand_img = document.createElement("img");
        
        brand_img.setAttribute("class","brand-se");
        brand_img.setAttribute("id","brand-se"+ids);
        document.getElementById('box'+ids).appendChild(brand_img);





        var divImg = document.createElement("div");
        divImg.setAttribute("class", "img-box");
        divImg.setAttribute("id", "img-box-"+ids);
        document.getElementById('box'+ids).appendChild(divImg);

        // phone img
        var img = document.createElement("img");
        img.setAttribute("class","phone-img");
        img.setAttribute("id", "img-se"+ids);
        document.getElementById("img-box-"+ids).appendChild(img);


        var divLink = document.createElement("div");
        divLink.setAttribute("class", "link-button");
        divLink.setAttribute("id", "link-button-"+ids);

        document.getElementById('box'+ids).appendChild(divLink);

        var aLink = document.createElement("a");
        aLink.innerHTML = "visit website";
        

        aLink.setAttribute("id","link"+ids);
      

        document.getElementById('link-button-'+ids).appendChild(aLink);
/*
        document.getElementById("box"+ids).style.height = "280px";
        document.getElementById("box"+ids).style.width = "780px";
        document.getElementById("img-box-"+ids).style.width = "220px";
        document.getElementById("img-box-"+ids).style.height = "280px";
        document.getElementById("img"+ids).style.height = "260px";
        document.getElementById("img"+ids).style.width = "250px";
        document.getElementById("img-box-"+ids).style.marginLeft = "-28px";

*/
}





function phoneData(idIndex, jsonDataIndex ,fileFormat, brand ,normalPrice, name ,img) {
  
  document.getElementById('price-se'+idIndex).innerHTML = fileFormat.links[jsonDataIndex].price.slice(0,-3)  ;
  document.getElementById('normal-price'+idIndex).innerHTML = "<s>$ "+normalPrice+"</s>" ;
  var JsonData = fileFormat.links[jsonDataIndex].price ;
  
  if (brand == "a") {
   var JsonDataInt = JsonData.slice(1);
   var ReplaceComma = parseFloat(JsonDataInt.replace(/,/g, ''));
   var differenceInPrice = normalPrice - ReplaceComma ;

   var percentValue = (parseInt(differenceInPrice) / normalPrice ) * 100   ;

   var roundedPercentValue = Math.round(percentValue) ;
   document.getElementById('brand-se'+idIndex).src = "/img/amazon.jpg"  ;
  document.getElementById('brand-se'+idIndex).style.top = "120px"  ;



   
  }


   if (brand == "e") {
   var JsonDataInt = JsonData.slice(4);
   var ReplaceComma = parseFloat(JsonDataInt.replace(/,/g, ''));
   var differenceInPrice = normalPrice - ReplaceComma ;

   var percentValue = (parseInt(differenceInPrice) / normalPrice ) * 100   ;

   var roundedPercentValue = Math.round(percentValue) ;
   document.getElementById('brand-se'+idIndex).src = "/img/ebay.jpg"  ;
   document.getElementById('brand-se'+idIndex).style.width = "60px"  ;
   document.getElementById('brand-se'+idIndex).style.left = "140px"  ;
   


   if(JsonData.slice(0,2) == "US"){
     document.getElementById('price-se'+idIndex).innerHTML = JsonData.slice(3,-3)  ;
     document.getElementById('normal-price'+idIndex).innerHTML = "<s>$ "+normalPrice+"</s>" ; 
   
   }else if (JsonData.slice(0,3) == "GBP"){
     document.getElementById('price-se'+idIndex).innerHTML = " £ " + JsonData.slice(4,-3)  ;
     document.getElementById('normal-price'+idIndex).innerHTML = "<s> £"+normalPrice+"</s>" ;
   
   }else if (JsonData.slice(0,3) == "EUR"){
      document.getElementById('price-se'+idIndex).innerHTML =  JsonData.slice(4,-3) + " €" ;
      document.getElementById('normal-price'+idIndex).innerHTML = "<s> "+normalPrice+" €</s>" 
   }

 }

  if (brand == "w"){
      var ReplaceComma = parseFloat(JsonData.replace(/,/g, ''));
      var differenceInPrice = normalPrice - ReplaceComma ;

      var percentValue = (parseInt(differenceInPrice) / normalPrice ) * 100   ;

      var roundedPercentValue = Math.round(percentValue) ;

      document.getElementById('price-se'+idIndex).innerHTML = "$" + fileFormat.links[jsonDataIndex].price  ;
      document.getElementById('brand-se'+idIndex).src = "/img/walmart.jpg"  ;
      document.getElementById('brand-se'+idIndex).style.width = "45px"  ;


  }


    

 
  
  
  
  document.getElementById('discount'+idIndex).innerHTML = roundedPercentValue  + "% <span class="+"off"+">Off </span>" ;
  
  document.getElementById('img-se'+idIndex).src = img ;
  document.getElementById('link'+idIndex).href = fileFormat.links[jsonDataIndex].link ;
  document.getElementById('name'+idIndex).innerHTML = name ;

  document.getElementById('link'+idIndex).onclick = function () {
  top.window.location.href = fileFormat.links[jsonDataIndex].link;
  // body...
  }     
          
        


  if (roundedPercentValue == 0) {
        
      document.getElementById("normal-price"+idIndex).style.display = "none" ;
      document.getElementById("discount"+idIndex).style.display = "none" ;
  }
  
}

 








 

     
                
function input() {
  document.getElementById("search-btn-div").style.borderRadius = "5px";
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */




function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() || arr[i].substr(8, val.length).toUpperCase() == val.toUpperCase() || arr[i].substr(7, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong><a>" + arr[i].substr(0, val.length) + "</a></strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;

              if (inp.value.slice(0,6) == "iphone") {
                location.replace("global/apple/"+inp.value.replace(/ /g,"-")+".html");
                  
              }else if (inp.value.slice(0,16) == "samsung s10 lite"){
                location.replace("global/samsung/samsung-note-10-lite.html");
              }else if (inp.value.slice(0,7) == "samsung"){
                location.replace("global/samsung/"+inp.value.replace(/ /g,"-")+".html");
              }

              
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}

/*An array containing all the country names in the world:*/
var countries = ["iphone se 2020","iphone 11 pro","iphone 11 pro max","iphone 11","iphone x","iphone xr","iphone xs","iphone 8","samsung s20","samsung note10","samsung s10","samsung note 10 lite","samsung s10 lite","samsung a71","samsung a51","samsung a31"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/



function subs(){
    var urlsing = document.getElementById("myInput").value;
    document.getElementById("myI").innerHTML = urlsing;
   if (urlsing == "Samoa"){
    location.replace("http://localhost:3000/test2.html");
   }
  }







