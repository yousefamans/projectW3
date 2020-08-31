var amazon = [
  { "name": "Xiaomi Redmi 8A 32GB 2GB  "                    ,  "normalPrice" :  149    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51U74AZGyBL._AC_SL1000_.jpg  "                 },
  { "name": "Xiaomi Redmi Note 8 64GB 4GB  "                ,  "normalPrice" :  189    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61YjtJEsM2L._AC_SL1000_.jpg  "                 },
  { "name": "Xiaomi Redmi Note 8 Pro 64GB 6GB  "            ,  "normalPrice" :  249    , "color" :  "grey"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/81UgYuadkpL._AC_SX522_.jpg  "                 },
  { "name": "Xiaomi Redmi Note 9 Pro 128GB 6GB  "           ,  "normalPrice" :  299    , "color" :  "grey"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61VTwVvavNL._AC_SX425_.jpg  "                 },
  { "name": "Xiaomi Redmi Note 9S 6GB 128GB  "              ,  "normalPrice" :  259    , "color" :  "white"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61icJqHGJzL._AC_SX425_.jpg  "                 },
  { "name": "Xiaomi Note 9 4GB 128GB  "                     ,  "normalPrice" :  199    , "color" :  "green"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61H76vlOzwL._AC_SX522_.jpg  "                 },
  { "name": "Xiaomi  Mi Note 10 Lite 6GB 64GB  "            ,  "normalPrice" :  349    , "color" :  "purple"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": " https://images-na.ssl-images-amazon.com/images/I/41VXMofArVL._AC_.jpg "                 },
  { "name": "Xiaomi Mi Note 10 128GB   "                    ,  "normalPrice" :  449    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/91AHzW462WL._AC_SX466_.jpg  "                 },
  { "name": "Xiaomi Mi Note 10 Lite 128GB 8GB  "            ,  "normalPrice" :  399    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/416Qcz%2B1kTL._AC_SX425_.jpg  "                 },
  { "name": "Xiaomi Mi Note 10 128GB  "                     ,  "normalPrice" :  449    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/91AHzW462WL._AC_SX466_.jpg  "                 },
  { "name": "Xiaomi Redmi Note 8 Pro 128GB 6GB  "           ,  "normalPrice" :  299    , "color" :  "green"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/819X9bJV3zL._AC_SX522_.jpg  "                 },
  { "name": "Xiaomi Poco F2 Pro 128GB, 6GB  "               ,  "normalPrice" :  479    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51Ss-RuZ67L._AC_SL1000_.jpg  "                 },
  { "name": "Xiaomi Poco F2 Pro 128GB, 6GB  "               ,  "normalPrice" :  479    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51Ss-RuZ67L._AC_SX425_.jpg  "                 },
  { "name": "Xiaomi Mi Band 4  "                            ,  "normalPrice" :  40    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51SQSEoSr8L._AC_SY355_.jpg  "                 },
  { "name": "Xiaomi Mi Band 5  "                            ,  "normalPrice" :  59    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71sJxS45SnL._AC_SX679_.jpg  "                 },

];








// write data to html

function phoneData(idIndex, sortedPhoneListIndex,listName) {
  document.getElementById('phone'+idIndex).innerHTML =  listName[sortedPhoneListIndex].name  ;
  document.getElementById('price'+idIndex).innerHTML = "Price: " + "<span class='price-color'>"+ listName[sortedPhoneListIndex].price  + "<br><s class="+"beforePrice"+">  " + listName[sortedPhoneListIndex].normalPrice+"</s>" ;
  document.getElementById('difference'+idIndex).innerHTML = "<span class='discount-color'>" + listName[sortedPhoneListIndex].percent + "% Off" ;
  document.getElementById('img'+idIndex).src =  listName[sortedPhoneListIndex].img  ;
  document.getElementById('linkBtn'+idIndex).href =  listName[sortedPhoneListIndex].linkUrl  ;
  document.getElementById('color'+idIndex).style.backgroundColor =  listName[sortedPhoneListIndex].color  ;
  if (listName[sortedPhoneListIndex].brand == "w"){
      document.getElementById('brand'+idIndex).src =  ""  ;
  } else if (listName[sortedPhoneListIndex].brand == "a") {
      document.getElementById('brand'+idIndex).src = '/img/amazon.jpg' ;
  }

}
   




///Ebay


// amazon







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
  for (i = 0 , j=72; i < 15,j< 87; i++,j++) {
  
    dataFinderAmazon(i,j, amazon, json); 
  }





  


  
  amazon.sort(function(a, b){return a.percent - b.percent});
  

 

 
  
    

  phoneData(1,  14,amazon);
  phoneData(2,  13,amazon);
  phoneData(3,  12,amazon);
  phoneData(4,  11,amazon);
  phoneData(5,  10,amazon);
  phoneData(6,  9,amazon);
  phoneData(7,  8,amazon);
  phoneData(8,  7,amazon);
  phoneData(9,  6,amazon);
  phoneData(10,  5,amazon);
  phoneData(11,  4,amazon);
  phoneData(12,  3,amazon);
  phoneData(13,  2,amazon);
  phoneData(14,  1,amazon);
  phoneData(15,  0,amazon);

  
  


});
  
 
