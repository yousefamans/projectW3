var amazon = [
  { "name": "Oppo F11 6GB 128GB "                    ,  "normalPrice" : 399    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/71qP%2BfMtbDL._AC_SX522_.jpg "                 },
  { "name": "Oppo R17 PRO 128G 8GB "                 ,  "normalPrice" : 519    , "color" :  "green"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/315MXqFTumL._AC_.jpg "                 },
  { "name": "Oppo R11s 4GB 64GB "                    ,  "normalPrice" : 199    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/41XeajUVRaL._AC_.jpg "                 },
  { "name": "Oppo Reno 2 8GB 128GB "                 ,  "normalPrice" : 499    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51AZ12ueyyL._AC_.jpg "                 },
  { "name": "Oppo Reno2 F 8GB 128GB "                ,  "normalPrice" : 1    , "color" :  "green"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/8121-n8-ekL._AC_SY355_.jpg "                 },
  { "name": "Oppo Reno 3 Pro 5G 8GB 128GB "          ,  "normalPrice" : 669    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51z1XRg6N%2BL._AC_.jpg "                 },
  { "name": "Oppo Reno 3 Pro 5G 8GB 128GB  "         ,  "normalPrice" : 669    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51hCfrByatL._AC_SX522_.jpg "                 },
  { "name": "Oppo Find X 8GB 256GB "                 ,  "normalPrice" : 699    , "color" :  "red"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61s-wvta6KL._AC_SX425_.jpg "                 },
  { "name": "Oppo Find X 8GB 256GB "                 ,  "normalPrice" : 699    , "color" :  "blue"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/41TvpFV75yL._AC_.jpg "                 },
  { "name": "Oppo  Find X2 5G 8GB 256GB"             ,  "normalPrice" : 999    , "color" :  "orange"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/51%2BSIWuQVaL._AC_SL1000_.jpg "                 },
  { "name": "Oppo Oppo Find X2 Pro 12GB 256GB "      ,  "normalPrice" : 1599    , "color" :  "black"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/61K66G2uV2L._AC_SX522_.jpg "                 },
  { "name": "Oppo  R17 PRO 128G 8GB "                ,  "normalPrice" : 529    , "color" :  "green"         , "price": 0    ,    "difference": 0    , "percent": 0  , "brand": "a" ,    "linkUrl" :  ""     , "img": "https://images-na.ssl-images-amazon.com/images/I/315MXqFTumL._AC_.jpg "                 },
  
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
  for (i = 0 , j=87; i < 12,j< 99; i++,j++) {
  
    dataFinderAmazon(i,j, amazon, json); 
  }





  


  
  amazon.sort(function(a, b){return a.percent - b.percent});
  

 

 
  
    

  phoneData(1,  11,amazon);
  phoneData(2,  10,amazon);
  phoneData(3,  9,amazon);
  phoneData(4,  8,amazon);
  phoneData(5,  7,amazon);
  phoneData(6,  6,amazon);
  phoneData(7,  5,amazon);
  phoneData(8,  4,amazon);
  phoneData(9,  3,amazon);
  phoneData(10, 2,amazon);
  phoneData(11,  1,amazon);
 // phoneData(12,  0,amazon);



});
  
 
