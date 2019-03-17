const form = document.getElementsByName("materias")[0];

const validarNombre = (e) => {

    e.preventDefault();
}

const validatTeclado = () =>{
    form.resultadoMateia.addEventListener("keypress",function(e){
		var key = window.event ? e.which : e.keyCode;
		if (key < 46 || key > 57) {
			e.preventDefault();
		}
	},false);
}


export {validarNombre, validatTeclado};