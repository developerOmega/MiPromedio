const datos = document.getElementById("datos");

const eliminarMaterias = ()=>{

    for (let i = 0; i < datos.children.length; i++) {
            
        datos.children[i].children[2].addEventListener('click',()=>{
            datos.removeChild(datos.children[i]);
            alert(i);     
        });    

    }
}

export {eliminarMaterias};