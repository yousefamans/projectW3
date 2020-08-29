var amazon = [
  { "name": "Motorola Moto G Power 3-Day Battery 4GB 64GB "  ,  "normalPrice" : 249    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/81zUKb3%2BY1L._AC_SL1500_.jpg "                 },
  { "name": "Motorola Moto G8+ Plus 4GB 64GB "             ,  "normalPrice" : 249    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71Noa-5pBDL._AC_SX425_.jpg "                 },
  { "name": "Motorola Moto G7 power 3GB 32GB "             ,  "normalPrice" : 249    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/81BH%2Be9ERfL._AC_SY355_.jpg "                 },
  { "name": "Motorola Moto G Stylus 4GB 128GB"             ,  "normalPrice" : 299    , "color" :  "indigo"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/81vgapUa8fL._AC_SX425_.jpg "                 },
  { "name": "Motorola One Hyper 128GB  4GB"             ,  "normalPrice" : 349    , "color" :  "lightblue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/611ZBNOi5GL._AC_SL1000_.jpg "                 },
  { "name": "Motorola Moto G Fast 3GB 32GB"             ,  "normalPrice" : 199    , "color" :  "white"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71O-7Mn-SpL._AC_SX425_.jpg "                 },
  { "name": "Motorola One Macro XT2016-2 64GB"             ,  "normalPrice" : 199    , "color" :  "violet"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/41COD7QWnDL._AC_.jpg "                 },
  { "name": "Motorola Moto G8 Power 64GB 4GB "             ,  "normalPrice" : 249    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71b22OY4bqL._AC_SX425_.jpg "                 },
 
];








// write data to html

function phoneData(idIndex, sortedPhoneListIndex,listName) {
  document.getElementById('phone'+idIndex).innerHTML =  listName[sortedPhoneListIndex].name  ;
  document.getElementById('price'+idIndex).innerHTML = "Price: " + listName[sortedPhoneListIndex].price  + "<br><s class="+"beforePrice"+">  " + listName[sortedPhoneListIndex].normalPrice+"</s>" ;
  document.getElementById('difference'+idIndex).innerHTML =  listName[sortedPhoneListIndex].percent + "% Off" ;
  document.getElementById('img'+idIndex).src =  listName[sortedPhoneListIndex].img  ;
  document.getElementById('linkBtn'+idIndex).href =  listName[sortedPhoneListIndex].linkUrl  ;
  document.getElementById('color'+idIndex).style.backgroundColor =  listName[sortedPhoneListIndex].color  ;
  if (listName[sortedPhoneListIndex].brand == "w"){
      document.getElementById('brand'+idIndex).src =  ""  ;
  } else if (listName[sortedPhoneListIndex].brand == "a") {
      document.getElementById('brand'+idIndex).src = '/img/amazon.png' ;
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
  for (i = 0 , j=104; i < 8,j< 112; i++,j++) {
  
    dataFinderAmazon(i,j, amazon, json); 
  }

  amazon.sort(function(a, b){return a.percent - b.percent});
      

  phoneData(1,  7,amazon);
  phoneData(2,  6,amazon);
  phoneData(3,  5,amazon);
  phoneData(4,  4,amazon);
  phoneData(5,  3,amazon);
  phoneData(6,  2,amazon);
  phoneData(7,  1,amazon);
  phoneData(8,  0,amazon);




});
  
 
