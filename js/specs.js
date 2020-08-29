
function elementJS() {
	


	for (var ids = 1 ; ids < 5; ids++) {


		divSpan =  document.createElement("span");
		divSpan.setAttribute("class", "span");
		divSpan.setAttribute("id", "span"+ids);
		document.getElementById("list-box").appendChild(divSpan);

		divImg =  document.createElement("div");
		divImg.setAttribute("class", "img-div-opts");
		divImg.setAttribute("id", "img-box-"+ids);
		document.getElementById("span"+ids).appendChild(divImg);
		

		var aLink = document.createElement("a");
        
        aLink.setAttribute("id","link"+ids);
       
        document.getElementById('img-box-'+ids).appendChild(aLink);

		// phone img
		var img = document.createElement("img");
		img.setAttribute("class","img-opts");
		img.setAttribute("id", "img"+ids);
		document.getElementById('link'+ids).appendChild(img);	

		var phoneName = document.createElement("p");
        phoneName.setAttribute("id","name"+ids);
        phoneName.setAttribute("class","phone-name-p");
        document.getElementById('span'+ids).appendChild(phoneName);



    }
 


}

function elementDATA(src1,src2,src3,src4,img1,img2,img3,img4) {
	document.getElementById("link1").href = src1;
	document.getElementById("link2").href = src2;
	document.getElementById("link3").href = src3;
	document.getElementById("link4").href = src4;

	document.getElementById("img1").src = img1;
	document.getElementById("img2").src = img2;
	document.getElementById("img3").src = img3;
	document.getElementById("img4").src = img4;

		



}

function  footer() {
	

	btn_div = document.createElement("div");
	btn_div.setAttribute("class","show-btn");
	btn_div.setAttribute("id","showMoreBtn");
	btn_div.onclick = list;
	document.body.appendChild(btn_div);

	btn = document.createElement("a");
	btn.innerHTML = "show more";
	btn.setAttribute("class","show-atag");
	document.getElementById("showMoreBtn").appendChild(btn);

	footer = document.createElement("div");
	footer.innerHTML = ".";
	footer.setAttribute("class","footer");
	document.body.appendChild(footer);
}


function show1() {
	document.getElementById("main-img").src = document.getElementById("img1-src").src; 
	document.getElementById("img-div1").style.boxShadow = "0px 10px 20px 0px blue";
	document.getElementById("img-div2").style.boxShadow = "none"; 


}

function show2() {
	document.getElementById("main-img").src = document.getElementById("img2-src").src;
	document.getElementById("img-div2").style.boxShadow = "0px 10px 20px 0px blue";
	document.getElementById("img-div1").style.boxShadow = "none";

}



function samsung() {
	
	document.getElementById("img1").style.height ='300px';
	document.getElementById("img2").style.height ='300px';
	document.getElementById("img3").style.height ='290px';
	document.getElementById("img3").style.width ='220px';
	document.getElementById("img4").style.height ='300px';

	document.getElementById("name1").innerHTML = "Samsung S20";
    document.getElementById("name2").innerHTML = "Samsung Note 10";
	document.getElementById("name3").innerHTML = "Samsung A71";
	document.getElementById("name4").innerHTML = "Samsung A51";
	
}	


function apple() {
	
	document.getElementById("img1").style.width ='180px';
	document.getElementById("img2").style.width ='180px';
	document.getElementById("img3").style.height ='180px';
	document.getElementById("img3").style.width ='160px';
	document.getElementById("img4").style.width ='180px';

	document.getElementById("name1").innerHTML = "iphone 11 Pro";
    document.getElementById("name2").innerHTML = "iphone 11";
	document.getElementById("name3").innerHTML = "iphone XR";
	document.getElementById("name4").innerHTML = "iphone se 2020";
	
}




function list() {
	document.getElementById("showMoreBtn").style.display = "none";


	for (var i = 1 ; i < 3; i++) {

		dSpan =  document.createElement("span");
		dSpan.setAttribute("id", "div-span"+i);
		document.getElementById("phone-box").appendChild(dSpan);

		if (i ==1) {

			list_apple =  document.createElement("p");
			list_apple.innerHTML = 'Apple';
			list_apple.setAttribute("class", "list-title");
			document.getElementById("div-span1").appendChild(list_apple);

		}

		if (i==2){
			

			list_samsung =  document.createElement("p");
			list_samsung.innerHTML = 'Samsung';
			list_samsung.setAttribute("class", "list-title");
			document.getElementById("div-span2").appendChild(list_samsung);   

		} 

        divBOX =  document.createElement("div");
		divBOX.setAttribute("class", "list-box");
		divBOX.setAttribute("id", "div-box-"+i);
		document.getElementById("div-span"+i).appendChild(divBOX);



	}





	for (var ids = 1 ; ids < 5; ids++) {


		divSpan =  document.createElement("span");
		divSpan.setAttribute("class", "span");
		divSpan.setAttribute("id", "phone-span"+ids);
		document.getElementById("div-box-1").appendChild(divSpan);

		divImg =  document.createElement("div");
		divImg.setAttribute("class", "img-div-opts");
		divImg.setAttribute("id", "phone-img-box-"+ids);
		document.getElementById("phone-span"+ids).appendChild(divImg);
		

		var aLink = document.createElement("a");
        
        aLink.setAttribute("id","phone-link"+ids);
       
        document.getElementById('phone-img-box-'+ids).appendChild(aLink);

		// phone img
		var img = document.createElement("img");
		img.setAttribute("class","img-opts");
		img.setAttribute("id", "phone-img"+ids);
		document.getElementById('phone-link'+ids).appendChild(img);	

		var phoneName = document.createElement("p");
        phoneName.setAttribute("id","phone-name"+ids);
        phoneName.setAttribute("class","phone-name-p");
        document.getElementById('phone-span'+ids).appendChild(phoneName);



    }


    for (var ids = 5 ; ids < 9; ids++) {


		divSpan =  document.createElement("span");
		divSpan.setAttribute("class", "span");
		divSpan.setAttribute("id", "phone-span"+ids);
		document.getElementById("div-box-2").appendChild(divSpan);

		divImg =  document.createElement("div");
		divImg.setAttribute("class", "img-div-opts");
		divImg.setAttribute("id", "phone-img-box-"+ids);
		document.getElementById("phone-span"+ids).appendChild(divImg);
		

		var aLink = document.createElement("a");
        
        aLink.setAttribute("id","phone-link"+ids);
       
        document.getElementById('phone-img-box-'+ids).appendChild(aLink);

		// phone img
		var img = document.createElement("img");
		img.setAttribute("class","img-opts");
		img.setAttribute("id", "phone-img"+ids);
		document.getElementById('phone-link'+ids).appendChild(img);	

		var phoneName = document.createElement("p");
        phoneName.setAttribute("id","phone-name"+ids);
        phoneName.setAttribute("class","phone-name-p");
        document.getElementById('phone-span'+ids).appendChild(phoneName);


    }


    document.getElementById("phone-name1").innerHTML = "iphone 11 Pro";
    document.getElementById("phone-name2").innerHTML = "iphone 11";
	document.getElementById("phone-name3").innerHTML = "iphone XR";
	document.getElementById("phone-name4").innerHTML = "iphone se 2020";


	


	document.getElementById("phone-link1").href = "/specs/apple/iphone-11-pro.html";
	document.getElementById("phone-link2").href = "/specs/apple/iphone-11.html";
	document.getElementById("phone-link3").href = "/specs/apple/iphone-xr.html";
	document.getElementById("phone-link4").href =  "/specs/apple/iphone-se-2020.html";

           
	document.getElementById("phone-img1").src = "https://m.media-amazon.com/images/I/81vZCv9kA0L.jpg";
	document.getElementById("phone-img2").src = "https://m.media-amazon.com/images/I/71kZfQA-Y7L.jpg" ;
	document.getElementById("phone-img3").src = "https://m.media-amazon.com/images/I/515dXLYiSQL.jpg" ;
	document.getElementById("phone-img4").src = "https://www.amazon.com/images/I/810DvHOZ9nL.jpg";



	document.getElementById("phone-name1").innerHTML = "iphone 11 Pro";
    document.getElementById("phone-name2").innerHTML = "iphone 11";
	document.getElementById("phone-name3").innerHTML = "iphone XR";
	document.getElementById("phone-name4").innerHTML = "iphone se 2020";


	


	document.getElementById("phone-link5").href = "/specs/samsung/samsung-s20.html";
	document.getElementById("phone-link6").href = "/specs/samsung/samsung-note10.html";
	document.getElementById("phone-link7").href = "/specs/samsung/samsung-a71.html";
	document.getElementById("phone-link8").href = "/specs/samsung/samsung-a51.html" ;

           
	document.getElementById("phone-img5").src = "https://images-na.ssl-images-amazon.com/images/I/61bKL2qu11L._AC_SL1000_.jpg" ;
	document.getElementById("phone-img6").src = "https://images-na.ssl-images-amazon.com/images/I/61ZEXmGekgL._AC_SL1500_.jpg";
	document.getElementById("phone-img7").src = "https://i5.wal.co/asr/cc3a1f7b-39bd-4944-b433-96cc858ab457_1.c101fbec218ac0a842403bad3f397822.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"  ;
	document.getElementById("phone-img8").src = "https://i5.wal.co/asr/6d43f5a7-172c-4782-b087-3783bedbaf44.1cc6da5b8bcefff5b1063716daa3a584.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff";
 

    document.getElementById("phone-img5").style.height ='300px';
	document.getElementById("phone-img6").style.height ='300px';
	document.getElementById("phone-img7").style.height ='290px';
	document.getElementById("phone-img7").style.width ='220px';
	document.getElementById("phone-img8").style.height ='300px';

	document.getElementById("phone-name5").innerHTML = "Samsung S20";
    document.getElementById("phone-name6").innerHTML = "Samsung Note 10";
	document.getElementById("phone-name7").innerHTML = "Samsung A71";
	document.getElementById("phone-name8").innerHTML = "Samsung A51";
	
   
	
}