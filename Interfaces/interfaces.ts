interface Usuario{
    nombreUsuario:string
    password:string
    confirmationPassword?:string
}

let usuario1:Usuario = {nombreUsuario: 'juan', password: '1234', confirmationPassword:"1234"};

console.log(usuario1)
console.log(usuario1.nombreUsuario)

interface Abordar{
    abordarTransporte():void;
}

let Avion:Abordar = {
    abordarTransporte: function(){
        console.log('Abordando')
    }
}

Avion.abordarTransporte();