function elementJS(ids) {
        var aTag = document.createElement("a");
        aTag.innerHTML = "name";
        
        aTag.setAttribute("class","link-txt");
        aTag.setAttribute("id","name"+ids);

        document.getElementById('box'+ids).appendChild(aTag);

        var price_value = document.createElement("p");
        price_value.innerHTML = "price";
        price_value.setAttribute("class","price-value");
        price_value.setAttribute("id","price"+ids);
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
        
        brand_img.setAttribute("class","brand");
        brand_img.setAttribute("id","brand"+ids);
        document.getElementById('box'+ids).appendChild(brand_img);

        var divImg = document.createElement("div");
        divImg.setAttribute("class", "img-box");
        divImg.setAttribute("id", "img-box-"+ids);
        document.getElementById('box'+ids).appendChild(divImg);

        // phone img
        var img = document.createElement("img");
        img.setAttribute("class","phone-img");
        img.setAttribute("id", "img"+ids);
        document.getElementById("img-box-"+ids).appendChild(img);


        var divLink = document.createElement("div");
        divLink.setAttribute("class", "link-button");
        divLink.setAttribute("id", "link-button-"+ids);

        document.getElementById('box'+ids).appendChild(divLink);

        var aLink = document.createElement("a");
        aLink.innerHTML = "visit website";
        

        aLink.setAttribute("id","link"+ids);

        document.getElementById('link-button-'+ids).appendChild(aLink);

        document.getElementById("box"+ids).style.height = "300px";
        document.getElementById("box"+ids).style.marginLeft = "75px";
        document.getElementById("box"+ids).style.width = "810px";
        document.getElementById("img-box-"+ids).style.width = "220px";
        document.getElementById("img-box-"+ids).style.height = "300px";
        document.getElementById("img"+ids).style.height = "250px";
        document.getElementById("name"+ids).style.left = "250px";
        
      


}




function phoneData(idIndex, jsonDataIndex ,fileFormat, brand ,normalPrice, name ,img) {
  
  
  var JsonData = fileFormat.links[jsonDataIndex].price ;
  
  var JsonDataInt = JsonData.slice(1);
  var ReplaceComma = parseFloat(JsonDataInt.replace(/,/g, ''));
  var differenceInPrice = normalPrice - ReplaceComma ;

  var percentValue = (parseInt(differenceInPrice) / normalPrice ) * 100   ;

  var roundedPercentValue = Math.round(percentValue) ;

  if (brand == "a") {
      document.getElementById('price'+idIndex).innerHTML = JsonData.slice(0,-3)  ;
      document.getElementById('brand'+idIndex).src = "/img/amazon.jpg"  ;
      document.getElementById("img"+idIndex).style.width = "200px";
      document.getElementById("img"+idIndex).style.left = "-10px";
      
    

   
  }

  if (brand == "f"){
     document.getElementById('price'+idIndex).innerHTML = fileFormat.links[jsonDataIndex].price  ;  
      document.getElementById('brand'+idIndex).src = "/img/flipkart.jpg"  ;
     
     

        
  }
  
  document.getElementById('discount'+idIndex).innerHTML = roundedPercentValue + "% <span class="+"off"+">Off </span>" ;
  document.getElementById('normal-price'+idIndex).innerHTML = "<s>"+normalPrice+" ₹</s>" ;
  document.getElementById('img'+idIndex).src = img ;
  document.getElementById('link'+idIndex).href = fileFormat.links[jsonDataIndex].link ;
  document.getElementById('name'+idIndex).innerHTML = name ;

  if (roundedPercentValue == 0) {
        
        document.getElementById("normal-price"+idIndex).style.display = "none" ;
        document.getElementById("discount"+idIndex).style.display = "none" ;
  }
  
  
  

}




function imgSize(starting, ending, width , height,margin){
  for (var i = starting; i <ending; i++) {
      document.getElementById("img"+i).style.width = width+"px";
      document.getElementById("img"+i).style.height = height+"px";
      document.getElementById("img"+i).style.left = margin+"px";

      }  
}
