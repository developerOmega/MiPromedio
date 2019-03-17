import {validarNombre,validatTeclado} from './validar';
import {Materia,Usuario} from './clases'; 

const form = document.getElementsByName("materias")[0],
    agregar = document.getElementById("agregar"),
    datos = document.getElementById("datos");


/*----------------------------------------Validar-------------------------------------------------*/ 
form.addEventListener("submit",validarNombre);
validatTeclado();


/*----------------------------------------Materia-------------------------------------------------*/
let materias = new Array(),
    contador = 0;   

agregar.addEventListener('click',(e)=>{

    if(form.nombreMateria.value == 0 || form.resultadoMateia.value == 0){
        form.nombreMateria.className = "none";
        form.resultadoMateia.className = "none";
        e.preventDefault();
    }else{
        form.nombreMateria.className = "";
        form.resultadoMateia.className = "";

        materias[contador] = new Materia(form.nombreMateria.value,form.resultadoMateia.value);
        materias[contador].agregar();
        contador++;
    }
})

/*----------------------------------------Agregar-------------------------------------------------*/
let usuario = new Array(),
    c = 0;

form.aceptar.addEventListener("click",(e)=>{

    if(form.nombre.value == 0){
        form.nombre.className = "nombre none";
        e.preventDefault(); 
    }else{

        usuario[c] = new Usuario(form.nombre.value, form.materia, form.resultado);
        usuario[c].agregar();

        form.nombre.className = "nombre";
        form.nombre.value = '';
    }

    
})

