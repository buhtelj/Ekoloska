	
	function odpriNavigacijo() {
		document.getElementById('navigacija').style.display = "block";
	}

	function zapriNavigacijo() {
		document.getElementById('navigacija').style.display = "none";
	}

	function zamenjajStran(id_kat) { 
	  $("#page").load("http://bplanet.si/web/ekoloska/strani/izbira.php", { id_kategorije: id_kat}, function() { 
			$('.loading').hide();
		});
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

	
	function odstrani(id){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/remove.php", {id_izdelka: id}, function() { 
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
		
	function  naBlagajno(){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/buy.php", function() { 
			$('.loading').hide();
		});
	}
	
	function popust(k){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/cart.php", {popustKoda: k}, function() { 
			$('.loading').hide();
		});
	}
	
	function prijava(st){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/vpis.php", {clanska: st}, function() { 
			$('.loading').hide();
		});
	}
	
	function pozabljeno(mail){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/vpis.php", {email: mail}, function() { 
			$('.loading').hide();
		});
	}
	
	function podatki(st){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/buy.php", {podatki: st}, function() { 
			$('.loading').hide();
		});
	}
	
	function kupi(i, u, t, e, np){
		$("#page").load("http://bplanet.si/web/ekoloska/strani/cart/kupi.php", {ime: ime, ulica: u, tel: t, email: e, nacin: np}, function() { 
			$('.loading').hide();
		});
	}