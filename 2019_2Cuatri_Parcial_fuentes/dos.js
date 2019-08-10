function mostrar()
{     var mascotas;
      var edad;
      var peso;
      var max;
      var min;
      var nombre;
      var esPrimerPerro =true;
      var perroMasViejo;
      var perroLiviano;
      var contador = 0;
      var acumuladorDePeso = 0;
      var promedio;
      var cantidadAnimales =0;

          // le definimos la cantidad de iteraciones //
            while (contador < 4)  
            
            {

            mascota=prompt("Ingrese Su Mascota si es Perro O Gato");
            

            }

           // usamos && por que tiene que ser o perro o gato para que entre // 
           // validamos la mascota //

          }     while   (mascota != "perro" && mascota != "gato") 
      
         {

        mascota=prompt("Ingrese Una Mascota Valida");

        }         
        do {
              edad = prompt(" Ingrese la edad entre 1 y 100");
              edad = parseInt(edad);

        }       while(isNaN(edad) || edad < 1 || edad > 25);
             
        do {
                peso = prompt("ingrese el peso entre 1 y 100 kgs");
                peso = parseInt (peso);
            // 
          }while (isNaN(peso) || peso < 1 || peso >100 );

          nombre = prompt ( "ingrese El Nombre ");
            // ingreso el acumulador de peso //
          acumuladorDePeso = acumuladorDePeso + peso;
        
        
          if (peso < 10 && edad > 10)
          {
                cantidadAnimales++;
                }

          if ( mascota == perro )  {
            if (esPrimerPerro)
            {    edadMaxima = edad;
            perroMasViejo =nombre ;
            esPrimerPerro = false;
           } else if ( edad > edadMaxima) {

            edadMaxima = edad;
            perroMasViejo = nombre;
           }
          
          
          
          }    
        contador++;

     
      
      // ahora pido y calculo el promedio afuera del while //
      
      promedio = acumuladorDePeso / contador;
       



