prompt("La herramienta creada es el peto de hierro y se puede quitar dando click en la tecla esc y se vuelve a poner con click derecho")
document.addEventListener("keyup", (evento)=>{
    if(evento.keyCode == 27){
        document.getElementsByClassName("peto")[0].style.opacity = 0;
    }
});
class Objeto{
    constructor(nombre, material){
        this.nombre = nombre;
        this.material = material;
    }

    mostrarEstadisticas(){
        document.getElementById("estadisticas__container").style.display = 'inline'
        document.getElementById('nombre').innerText = this.nombre
        document.getElementById('material').innerText = this.material
        document.getElementById('vidaU').innerText = this.vidaUtil
        document.getElementById('prote').innerText = this.proteccion
    }
}

class Herramienta extends Objeto{
    constructor(nombre, material, vidaUtil){
        super(nombre, material);
        this.duracion = vidaUtil;
    }

    atacar(enemigo){
        alert(`Atacando ${enemigo}`)
        //alert("Atacando " + enemigo)
    }
}

class Espada extends Herramienta{
    constructor(nombre, material, vidaUtil, afilado){
        super(nombre, material, vidaUtil);
        this.afilado = afilado;
    }

    cortarTelaraña(){
        alert("Cortando telaraña sin parametros...")
    }

    // metodo sobrecargado
    cortarTelaraña(objeto){
        alert(typeof objeto)
        if(objeto == "telaraña"){
            alert("Cortando telaraña con parametros...")
        } else {
            alert("Esto no es una telaraña")
        }
    }
}

class Armadura extends Objeto{
    constructor(nombre, material, vidaUtil, proteccion){
        super(nombre, material);
        this.proteccion = proteccion
        this.vidaUtil = vidaUtil
    }
    
    quitar(){
        alert("Quitando " + this.nombre);
        document.getElementById("peto").addEventListener.style.display = 'none'
    }
}


var espadaDiamante = new Espada(
    'Espada de Diamante',
    'Diamante',
    80,
    30,10
    )

/*
espadaDiamante.cortarTelaraña()
espadaDiamante.atacar()
*/

var hachaHierro = new Herramienta(
    'Hacha de Hierro',
    'Hierro',
    100
)

var petoHierro = new Armadura("Armadura de hierro","Hierro", 65, 60)

document.getElementById('espada').addEventListener('click', () => {
    espadaDiamante.mostrarEstadisticas()
})


document.getElementById('peto').addEventListener('click', () => {
    petoHierro.mostrarEstadisticas()
    document.getElementsByClassName("peto")[0].style.opacity = 1;
 
})