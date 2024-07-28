console.log("executing")
//------Selector de Elementos---------//

const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptor");
const aviso = document.querySelector("texto-aviso");
const aviso = document.querySelector(".texto-aviso")

//-------Boton de Encriptar----------//
btnEncriptar.addEventListener("click", e=>{ 
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == ""){
        aviso.style.background = "#OA3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
});
