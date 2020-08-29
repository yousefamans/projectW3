var amazon = [
  { "name": "Google Pixel 3a XL with 64GB"              ,  "normalPrice" : 479    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/814bCP5oOsL._AC_SX679_.jpg "                 },
  { "name": "Google Pixel 2 64 GB (Renewed)"            ,  "normalPrice" : 178    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61v0enHOXpL._AC_SX522_.jpg "                 },
  { "name": "Google Pixel 3 with 64GB"                  ,  "normalPrice" : 779    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71-s0qpYaZL._AC_SY355_.jpg "                 },
  { "name": "Google Pixel 3a 64GB"                      ,  "normalPrice" : 399    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": " "                 },
  { "name": "Google Pixel 4"                            ,  "normalPrice" :799    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61C9GrXEp4L._AC_SY450_.jpg "                 },
  { "name": "Google Pixel 4 64GB Unlimited Cloud Storage"  ,  "normalPrice" : 1    , "color" :  "blak"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": " "                 },
  { "name": "Google Pixel 4 XL 64GB (Renewed)"          ,  "normalPrice" : 819    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51X0I%2BVBOQL._AC_SY550_.jpg "                 },
  { "name": "Google Pixel 4, 64GB (Renewed)"            ,  "normalPrice" : 799    , "color" :  "white"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71dgOlgZbEL._AC_SY355_.jpg "                 },
  
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
  for (i = 0 , j=127; i <7,j< 135; i++,j++) {
  
    dataFinderAmazon(i,j, amazon, json); 
  }

  amazon.sort(function(a, b){return a.percent - b.percent});
      

  phoneData(1,  7,amazon);
  phoneData(2,  6,amazon);
  phoneData(3,  5,amazon);
  phoneData(4,  4,amazon);
  phoneData(5,  3,amazon);
  phoneData(6,  2,amazon);
 // phoneData(7,  1,amazon);
 // phoneData(8,  0,amazon);
  




});
  
 
