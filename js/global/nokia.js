var amazon = [
  { "name": "Nokia 7.2 128 GB"             ,  "normalPrice" : 359    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71JQpRDCyXL._AC_SY355_.jpg "                 },
  { "name": "Nokia 5.3 "                   ,  "normalPrice" : 219    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71aWzx7xEsL._AC_SX425_.jpg "                 },
  { "name": "Nokia 6.2 64 GB"              ,  "normalPrice" : 269    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61uxQNJ2D6L._AC_SX425_.jpg "                 },
  { "name": "Nokia 2.2 32 GB"              ,  "normalPrice" : 99    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61H6LxQvBFL._AC_SY355_.jpg "                 },
  { "name": "Nokia 7.1  64 GB"             ,  "normalPrice" : 229    , "color" :  "blue"          , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/6135-JAMHHL._AC_SX522_.jpg "                 },
 
];






// write data to html

function phoneData(idIndex, sortedPhoneListIndex,listName) {
  document.getElementById('phone'+idIndex).innerHTML =  listName[sortedPhoneListIndex].name  ;
  document.getElementById('price'+idIndex).innerHTML = "Price: " + "<span class='price-color'>"+ listName[sortedPhoneListIndex].price  + "<br><s class="+"beforePrice"+">  " + listName[sortedPhoneListIndex].normalPrice+"</s>" ;
  document.getElementById('difference'+idIndex).innerHTML =  "<span class='discount-color'>" +  listName[sortedPhoneListIndex].percent + "% Off" ;
  document.getElementById('img'+idIndex).src =  listName[sortedPhoneListIndex].img  ;
  document.getElementById('linkBtn'+idIndex).href =  listName[sortedPhoneListIndex].linkUrl  ;
  document.getElementById('color'+idIndex).style.backgroundColor =  listName[sortedPhoneListIndex].color  ;
  if (listName[sortedPhoneListIndex].brand == "w"){
      document.getElementById('brand'+idIndex).src =  ""  ;
  } else if (listName[sortedPhoneListIndex].brand == "a") {
      document.getElementById('brand'+idIndex).src = '/img/amazon.jpg' ;
  }

}
   



fetch('/json/usa/amazon.json')
.then(res => res.json())
.then((json) => {



function dataFinderAmazon(phonesListIndex, jsonDataIndex , listName, fileFormat ) {

  var Url = fileFormat.links[jsonDataIndex].link ;

  var priceJson = fileFormat.links[jsonDataIndex].price ;

  var sliced_price = priceJson.slice(1,-3);

  var price = sliced_price.replace(/,/g,"");
  
  var differenceInPrice = listName[phonesListIndex].normalPrice - price ;
  
  var percentValue = (parseInt(differenceInPrice) / parseInt(listName[phonesListIndex].normalPrice )) * 100   ;

  var roundedPercentValue = Math.round(percentValue) ;

  listName[phonesListIndex].difference =  differenceInPrice  ;

  listName[phonesListIndex].price =  priceJson ;
  // for percent
  
  listName[phonesListIndex].percent =  roundedPercentValue ;

  
  listName[phonesListIndex].linkUrl = Url ;

  }

  // if there is error check if links is declared in json file 

  var i , j ;
  for (i = 0 , j=99; i < 5,j< 104; i++,j++) {
  
    dataFinderAmazon(i,j, amazon, json); 
  }

  amazon.sort(function(a, b){return a.percent - b.percent});
      

  phoneData(1,  0,amazon);
  phoneData(2,  1,amazon);
  phoneData(3,  2,amazon);
  phoneData(4,  3,amazon);
  phoneData(5,  4,amazon);




});
  
 
