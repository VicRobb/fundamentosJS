
const usuarios = [
    {username: "usuario1", password: "1"},
    {username: "usuario2", password: "12"},
    {username: "usuario3", password: "123"},
    {username: "usuario4", password: "1234"},
]

function verificarDatos(username, password){
    return new Promise((resolve, reject) => {
        const usuario = usuarios.find((usr) => usr.username === username && usr.password === password);
        if(usuario){
            resolve(usuario); 
        }else{
            reject("Credenciales incorrectas")
        }
    });
}

async function inciarSesión(username, password){

    try{
        const usuario = await verificarDatos(username, password);
        console.log("Inicio de sesuón exitoso para el siarop")
    }catch(error){
        console.log("Erros de inicio de sesiom "+ error)
    }
}

inciarSesión("usuario2", "11")

