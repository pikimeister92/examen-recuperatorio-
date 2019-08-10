function mostrar() {
	var localidad;
	var acumuladorDeHabitantes = 0;
	var cantidadhabitantes;
	var temperatura;
	var TemperaturaMaxima ;
	var TemperaturaMinima ;
	var respuesta = "s";
	var contadorDePares = 0;
	var banderaMenosHabitantes = false;
	var nombreMenosHabitantes;
	var min;
	var banderaTemperaturaMin = true;
	var contadorLocalidadesTemperatura = 0;

	while (respuesta !="s") 
	{

		respuesta = prompt ("Ingrese Respuesta s para continuar");
		// ingreso la localidad  //
		
		localidad = prompt("Ingrese su Localidad");
		
		do 
		{
			cantidadhabitantes = prompt("Ingrese la canditad de Habitantes entre 1 y 40 ");
		} while (isNaN(cantidadhabitantes) || cantidadhabitantes < 1 || cantidadhabitantes > 40);
		
		do {  
			temperatura=prompt ("Ingrese una Temperatura ")
			temperatura = parseInt(parseInt);
		} 
		
		while (isNaN(temperatura) || temperatura < -50 || temperatura > 50);
		
	
		
		
		// para cantidad  se utiliza un contador //

		if (temperatura % 2 == 0)
		{  contadorDePares ++;}

		if (cantidadhabitantes > min || banderaMenosHabitantes == false )
		{		cantidadhabitantes=nombreMenosHabitantes;
				localidad = nombreMenosHabitantes;
				banderaMenosHabitantes == true;

		}if (temperatura >= 40) 
		{ contadorLocalidadesTemperatura ++;

			
		}if (temperatura < min ){ 

		}
		
	}

}
