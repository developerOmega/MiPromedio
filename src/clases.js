const datos = document.getElementById("datos"),
cajaPromedios = document.getElementById("cajaPromedios");

class Materia {
    constructor(materia = 'Generico',resultado = '0'){
        this.materia = materia,
        this.resultado = resultado;
    }

    agregar(){
        const divCalificacion = document.createElement("div"),
            divDato = document.createElement("div"),
            h4 = document.createElement("h4"),
            inputMateria = document.createElement("input"),
            inputResultado = document.createElement("input"),
            button = document.createElement("button"),
            i = document.createElement("i"),
            h4Texto = document.createTextNode(this.materia);

        /*Unir cajas*/
        h4.appendChild(h4Texto);

        divDato.appendChild(h4);
        divDato.appendChild(inputResultado);

        button.appendChild(i);

        divCalificacion.appendChild(divDato);
        divCalificacion.appendChild(inputMateria);
        divCalificacion.appendChild(button);

        datos.appendChild(divCalificacion);

        /*Agregar atributos*/
        divCalificacion.className = 'calificacion';
        inputResultado.className = 'impreso';

        inputMateria.setAttribute('type','hidden');
        inputMateria.setAttribute('name', 'materia');
        inputMateria.setAttribute('value', this.materia);

        inputResultado.setAttribute('type','text');
        inputResultado.setAttribute('name', 'resultado');
        inputResultado.setAttribute('value', this.resultado);

        button.setAttribute('id','eliminarDato');
        i.className = 'fas fa-times';

        for (var d = 0; d <= datos.children.length-1; d++) {
            
            /*-----------Modificar en bundle.js-------------*/
            datos.children[d].children[2].addEventListener('click',()=>{
                // datos.removeChild(datos.children[i]);
                this.parentNode.parentNode.removeChild(this.parentNode);     
            });    
    
        }
        
        
    }
}

class Usuario {

    constructor(nombre,materia,resultado){
        this.nombre = nombre,
        this.materia = materia,
        this.resultado = resultado;
    }

    agregar(){
        const divPromedio = document.createElement("div"),
            divEncabezado = document.createElement("div"),
            divTabla = document.createElement("div"),
            divTotal = document.createElement("div"),
            h3Total = document.createElement("h3"),
            pTotal = document.createElement("p"),
            h2 = document.createElement("h2"),
            button = document.createElement("button"),
            i = document.createElement("i"),
            div = new Array(),
            h3 = new Array(),
            p = new Array(),
            pText = new Array(),
            h3Text = new Array(),
            h2Text = document.createTextNode(this.nombre),
            h3TotalText = document.createTextNode("Total");
        
        let promedio = 0;


        /*Unir Elementos*/
        h2.appendChild(h2Text);
        button.appendChild(i);

        divEncabezado.appendChild(h2);
        divEncabezado.appendChild(button);

        if(datos.children.length == 0){
            promedio = 0;
        }else if(datos.children.length == 1){
            promedio=parseFloat(this.resultado.value);
        }else{
            for (let i = 0; i < this.materia.length; i++) {
                div[i] = document.createElement("div");
                h3[i] = document.createElement("h3");
                p[i] = document.createElement("p");
    
                h3Text[i] = document.createTextNode(this.materia[i].value);
                pText[i] = document.createTextNode(this.resultado[i].value);
    
                h3[i].appendChild(h3Text[i]);
                p[i].appendChild(pText[i]);
    
                div[i].appendChild(h3[i]);
                div[i].appendChild(p[i]);
    
                divTabla.appendChild(div[i]);
    
                /* Calacular promedio */
                promedio = promedio + parseFloat(this.resultado[i].value);
            }
    
            promedio = promedio/this.resultado.length;
        }
        
        

        const pTotalText = document.createTextNode(promedio.toFixed(2));

        h3Total.appendChild(h3TotalText);
        pTotal.appendChild(pTotalText);

        divTotal.appendChild(h3Total);
        divTotal.appendChild(pTotal);

        divTabla.appendChild(divTotal);

        divPromedio.appendChild(divEncabezado);
        divPromedio.appendChild(divTabla);

        cajaPromedios.appendChild(divPromedio);

        /* Agregar Atributos */
        divPromedio.className = 'promedio';
        divEncabezado.className = 'encabesadoResultado'
        divTabla.className = 'tablaRasultados';
        divTotal.className = 'total';
        i.className = 'fas fa-times';

        button.setAttribute("id","eliminar");

        /* Eliminar Caja */

        for (var f = 0; f <= cajaPromedios.children.length-1  ; f++) {

            /*-----------Modificar en bundle.js-------------*/
            cajaPromedios.children[f].children[0].children[1].addEventListener('click',()=>{
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);     
            });
                        
        }

        

    }


}

export {Materia,Usuario};