function datum_vreme(){
    document.getElementById('pozovi_datum_vreme').innerHTML = Date();
}

function promeni_Html_Sadrzaj(){
    document.getElementById('pozovi_promenu_HTML_sadrzaja').innerHTML= 'Zdravo Java Script';
}

function promeni_HTML_Varijable(){
    var ImeKnjige='Harry Poter';document.getElementById('pozovi_promenu_HTML_Varijable').innerHTML=ImeKnjige;
}

function saberi_x_y(){
	var x=50, y=10;document.getElementById('pozovi_saberi_x_y').innerHTML=x+y;
}
								
function Upali() {
    document.getElementById('pozovi_sijalicu').src = 'img/pic_bulbon.gif';
}

function Ugasi(){
    document.getElementById('pozovi_sijalicu').src ='img/pic_bulboff.gif';
}

function velicina_fonta(){
	document.getElementById('pozovi_promenu_fonta').style.fontSize='45px';
}

function sakrij(){
	document.getElementById('pozovi_skrivanje_teksta').style.display='none';
}

function otkrij(){
	document.getElementById('pozovi_otkrivanje_teksta').style.display='block';
}	
 
	 function otkrij_sakrij() {
		  var x = document.getElementById('pozovi_otkrivanje_sakrivanje_teksta');
		  if (x.style.display === 'none') {
			x.style.display = 'block';
		  } else {
			x.style.display = 'none';
		  }
	 }
 
function pozivam_alert_zbir(){
	 var x=5, y=10, z=x+y; alert('rezultat je:'+ z);
}

function pozivam_alert_podaci(){
	var ime= 'Pera', prezime='Peric',godine=25;alert(ime+'\n ' +prezime+' '+godine)
}

function pozivam_alert_proizvod(){
	var x=10, y=5, p=x*y; alert('rezultat je:'+ p);
}

function pozivam_alert_kolicnik(){
	var x=10, y=2, k=x/y; alert('rezultat je:'+ k);
}

function pozivam_alert_1(){
	var x=10, y=5; x+=y;alert("rezultat je:"+x);
}

function pozivam_alert_2(){
	var x=10, y=5; x*=y;alert(x);  
}



function mojaFunkcija() {
	alert('Zdravo Svete!');
}


function mojaFunkcija1() {
  return "Zdravo";
}

function mojaFunkcija2(){
	document.getElementById('demo').innerHTML='Hello';
}
  
function alert_za_ispis_imena(){
	var person={
		ime:"Harry",
		prezime:"Potter"
	};
	alert(person.ime);
}

function alert_za_ispis_drzava(){
	var person={
	ime:"Harry",
	prezime:"Potter",
	drzava:'Srbija'
	};
	alert(person.drzava);
}

function alert_za_ispis_recenice(){
	var person={
	ime:"Harry",
	godine:35
	};
	alert(person.ime+ ' ima' +person.godine);
}

function mojaFunkcija3(){
	alert("Cao drustvo u funkciji!!");
}

function mojaFunkcija4(){
	var brojim_slova='Maja Ognjanovic!', x=brojim_slova.length; alert(x);
									
}
function mojaFunkcija5(){
	var tekst="We are \"Vikings\" ";
	alert(tekst);		
}

function mojaFunkcija6(){
	var rec1 = "Zdravo"; var rec2 = "Svete!";
	alert(rec1+' '+rec2);	
}	
function mojaFunkcija7(){
	var tekst = "abcdefhijklm"; var na_kom_mestu = tekst.indexOf("h"); alert(na_kom_mestu);						
}
function mojaFunkcija8(){
	var txt = "I can eat bananas all day"; 
	var x = txt.slice(10, 17);
	alert(x);
}
function mojaFunkcija9(){
	var tekst = "Hello World"; tekst = tekst.replace("Hello", "Welcome");
	/*alert(tekst);*/
	document.getElementById('zovi').innerHTML=tekst;
}

function mojaFunkcija10(){
	var tekst = "Hello World"; tekst = tekst.toUpperCase();
	alert(tekst);
}
function mojaFunkcija11(){
	var tekst = "HELLO WORLD"; tekst = tekst.toLowerCase();
	alert(tekst);
}

function mojaFunkcija11a(){
	var string1 = "Hello "; var string2 = "World!"; var rezultat = string1.concat(string2);

	alert(rezultat);
}

function mojaFunkcija12(){
	 var voce = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	 var citrus = voce.slice(1, 3);
	document.getElementById("demo10").innerHTML = citrus;	
}

function mojaFunkcija14(){
	var voce=["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var povrce=["Grasak", "Krompir", "Sangarepa", "Celer"];
	var vocePovrce=voce.concat(povrce);
	var izuciElement=vocePovrce.slice(2,7);
	document.getElementById("demo14").innerHTML=izuciElement;
										
}