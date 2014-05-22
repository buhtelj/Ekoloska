<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="width=device-width, initial-scale=0.66, minimum-scale=0.66, maximum-scale=0.66" /> 
        <link rel="stylesheet" type="text/css" href="../css/index.css" />
		<link href='http://fonts.googleapis.com/css?family=Oswald&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		
        <title>Ekoloska trgovina</title>
		
		<script src="../js/jquery.js"></script>
		<script src="../js/funkcije.js"></script>
		<script>
			document.addEventListener("deviceready", onDeviceReady, false);

			function onDeviceReady() {
				alert("ready");
			}
						
		</script>
    </head>
    <body>
	
		<div id="header">
			<div id="header_box">
				<table width="100%" align="center">
						<tr align="right">
							<td width="30%" align="center">
								<a href='javascript:history.go(-1)'><img class="nazaj" src="../img/nazaj.png" alt="nazaj" /> </a>
							</td>
							<td width="43%" align="center"> 
								<a href="../index.html"><img class="logo" src="../img/logo.png" alt="logo"  /></a> 
							</td>
							<td width="32%" align="center"> 
								<a href="cart.html"><img  src="../img/cart1.png" class="kosarica" alt="kosarica" /></a>
							</td>
						</tr>
				</table>
			</div>
		</div>

		<div id="nav">
			<table width="100%" height="auto">
				<tr>
					<td width="32%"> 
						<a href="vpis.html"><img src="../img/iskanje.png" alt="iskanje artiklov" style="max-width: 100%; height: auto;"/>  </a>
					</td>
					<td width="2%"> </td>
					<td width="32%"> 
						<a href="kategorija.html"><img src="../img/kategorije.png" alt="kategorije"  style="max-width: 100%; height: auto;"/> </a>
					</td>
					<td width="2%"> </td>
					<td width="32%" > 
						<a href="kontakt.html"><img src="../img/kontakt.png" alt="kontakt"  style="max-width: 100%; height: auto;"/></a>
					</td>
				</tr>
			</table>
		</div>
		
		<div id="content">
			<div id="page"></div>
			<div class="loading"></div>
		</div>
		<%
			response.write(request.querystring("id"))
			%>
		<div id="izdelek"></div>
		<div class="loading"></div>
		
		<div style="padding-top: 50px"> </div>
		
		<div id="footer">
			<div class="razmak"></div>
			<div id="footer_box">
				<div class="razmak"></div>
				<table width="100%" style="padding-top: 20px;"> 
					<tr>
						<td width="70px">
							<img src="../img/nakupovanje.png" alt="nakupovanje" style="max-height: 90%;"/>
						</td>
						<td align="left"> 
							<a href="splosni_pogoji.html" style="text-decoration: none;">
								<div class="font_footer"> SPLOŠNI POGOJI POSLOVANJA </div> 
							</a>
						</td>
						
					</tr>
					<tr height="2px" align="center">
						<td colspan="3" >
							<img src="../img/crtafooter2.png" alt="crta" style="max-width:100%; height: 1px;"/> 
						</td>
					</tr>
					<tr>
						<td width="70px" style="padding-top: 10px">
							<img src="../img/pogoji.png" alt="splošni pogoji" style="max-height: 90%;"/>
						</td>
						<td align="left">					
								<div class="font_footer" style="padding-top: 20px; "> Tel: 04 777 0 444 | Email: info@ekoloska-trgovina.si </div> 
						</td>
					</tr>
					<tr> </tr>
				</table>
			</div>
		</div>

	</body>
</html>
