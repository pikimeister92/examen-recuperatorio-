
function mostrar()
{
	var ladoA;
	var ladoB;
	var ladoC;
	var mensaje;

	ladoA=prompt("Ingrese el Lado A");
	ladoB=prompt("Ingrese el Lado B");
	ladoC=prompt("Ingrese el Lado C");
   // verifico  si es escaleno //
	if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC)
	{
		mensaje = " Es escaleno , lados Concatenados : + " + ladoA + ladoB + ladoC
	}else if  (ladoA == ladoB && ladoA == ladoC)	
	
	{ 
			ladoA= parseInt ( ladoA);
			ladoB = parseInt (ladoB);
			ladoC = parseInt (ladoC);

			mensaje = " Es equilatero . Perimetro : " + (ladoA + ladoB + ladoC);
	  }
}
