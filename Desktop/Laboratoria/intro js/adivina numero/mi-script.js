var jugadora1 = prompt("ingresa un numero");

if (jugadora1) {
	  var jugadora2;
	  var acierto = false;
	   do{
	   		jugadora2 = prompt("adivina el numero");
		    if (jugadora1==jugadora2){
			      alert("acertaste");
				    acierto = true;
	 	    }
	    } while(acierto==true);	
} else{
		alert("jugadora 1 no imgresaste numero");
}


/*var jugadorUno = prompt("jugador Uno ingrese el numero");
if (jugadorUno) {
	var jugadorDos;
	var acierto = false;
	do{
		jugadorDos = prompt("jugador Dos adivine el numero del jugador Uno");
		if (jugadorUno==jugadorDos) {
			alert("acertastes!!!!!!!");
			acierto = true;
		}
	} while (acierto==false);
}
else{
	alert("jugadorUno no ingreso data")
}*/