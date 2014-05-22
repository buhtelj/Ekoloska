	
	function odpriNavigacijo() {
		document.getElementById('navigacija').style.display = "block";
	}

	function zapriNavigacijo() {
		document.getElementById('navigacija').style.display = "none";
	}

	function zamenjajStran(id_kat) { 
		window.location.assign("izbira.html")
	  $("#page").load("http://bplanet.si/web/ekoloska/strani/izbira.php", { id_kategorije: id_kat}, function() { 
			$('.loading').hide();
		});
	}
	
	
	function zamenjajStran2(id_kat){
		var url = "kategorije.html";
		var params = "lorem=ipsum&name=binny";
		http.open("POST", url, true);

		//Send the proper header information along with the request
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.setRequestHeader("Content-length", params.length);
		http.setRequestHeader("Connection", "close");

		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				alert(http.responseText);
			}
		}
		http.send(params);
	}
	function izdelki(id_pod){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/izdelki.php", {id_podkategorije: id_pod}, function() { 
			$('.loading').hide();
		});
	}

	function izdelek(id_izd){
		$("#izdelek").load("http://bplanet.si/web/ekoloska/strani/izdelek.php", {id_izdelka: id_izd}, function() { 
			$('.loading').hide();
			$('#content').hide();
		});
	}
	

	function vKosarico(id){
		$("#izdelek").load("http://bplanet.si/web/ekoloska/strani/cart/add.php", {id_izdelka: id}, function() { 
			$('.loading').hide();
			$('#content').hide();
		});
	}
	
	function vKosarico2(id){
		$("#izdelek").load("http://bplanet.si/web/ekoloska/strani/cart/add2.php", {id_izdelka: id}, function() { 
			$('.loading').hide();
			$('#content').hide();
		});
	}

	
	function odstrani(id, kol){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/remove.php", {id_izdelka: id, kolicina: kol}, function() { 
			$('.loading').hide();
		});
	}
	
	function dodaj(id, kol){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/change.php", {id_izdelka: id, kolicina: kol}, function() { 
			$('.loading').hide();
		});
	}
	
	function odstrani(id){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/remove.php", {id_izdelka: id}, function() { 
			$('.loading').hide();
		});
	}
		
	function naBlagajno(){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/buy.php", function() { 
			$('.loading').hide();
		});
	}
	
	function popust(){
		var k = $("#koda_pp").val();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/cart.php", {popustKoda: k}, function() { 
			$('.loading').hide();
		});
	}
	
	function prijava(){
		var st = $("#clanska").val();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/vpisovanje.php", {koda: st}, function() { 
			$('.loading').hide();
			Session["clanska"] = st;
		});
	}
	
	function pozabljeno(){
		var mail = $("#email").val();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/vpisovanje.php", {email: mail}, function() { 
			$('.loading').hide();
		});
	}
	
	function podatki(){
		var st = $("#clanska").val();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/buy.php", {clanska: st}, function() { 
			$('.loading').hide();
		});
	}
	
	function kupi(){
		var i = $("#ime").val();
		var u = $("#ulica").val();
		var p = $("#posta").val();
		var t = $("#tel").val();
		var e = $("#email").val();
		var np = $("#nacinplacila").val();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/kupi.php", {ime: i, ulica: u, posta: p, tel: t, email: e, nacin: np}, function() { 
			$('.loading').hide();
		});
	}
	
	function iskanje() {
		var st = $("#iskanje").val();
		 $("#page").load("http://bplanet.si/web/ekoloska/strani/artiklov.php", {artikli: st}, function() { 
			$('.loading').hide();
		});
	}
	
	function idStrani(url){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/id.php", {naslov: url}, function() { 
			$('.loading').hide();
		});
	}
	
