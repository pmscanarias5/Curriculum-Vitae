

var mapas = document.getElementById('mapas')
var boton = document.getElementById('boton')
function mostrarMapas(){
    if (mapas.style.display == 'none'){
        mapas.style.display = 'block'
        window.location = '#mapas'
        boton.innerHTML = 'Ocultar mapas'
    }
    else{
        mapas.style.display = 'none'
        window.location = '#boton'
        boton.innerHTML = 'Mostrar algunos mapas desarrollados'
    }

    
}