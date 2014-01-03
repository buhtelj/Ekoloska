	document.addEventListener("deviceready", onDeviceReady, false);

	function onDeviceReady() {
		alert("ready");
	}
				
	$(document).ready(function() {
		$('.loading').show();
		$("#page").load("http://bplanet.si/web/ekoloska/strani/test.php", function() {
			$('.loading').hide();
		});
	});

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
		$("#page").load("http://bplanet.si/web/ekoloska/strani/izdelek.php", {id_izdelka: id_izd}, function() { 
			$('.loading').hide();
		});
	}
	
	function izdelekPr(id_izd){
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