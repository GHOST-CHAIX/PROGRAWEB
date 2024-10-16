
/*function hello(){
    console.log('Hola')
    console.log('Las feminazis no deberian hacer exposiciones')
}

hello();*/

//Funcion que retorna
/*
function hello(){
    console.log('deben de hacer')
    return 'hola clase'
}

const result = hello()

console.log(result);*/

//Funcion que retorna otra funcion

/*function hello(){
    return function (){
        return 'Hola soy omelo chino';
    }
}

console.log(hello()()); */

/*function add(x){

    console.log(x);

}

add(5); */

//Funcion con multiples parametros

/*
function add(x,y){
    console.log(x+ " " +y);
}

add("tengo hambre", "quiero una pizza"); */



//Multiples parametros 
/*function add(x,y=45){
    console.log(x+ " " +y);
}

add("tengo hambre", "quiero una pizza");*/

//?Control de errores en multiparametros 

/*function add(x,y) {
    if (y==3){
        y=0;
    }
    console.log(x+y);
}

add(45,6)*/


//OBJETOS


    const user = {
        nombre : "Pablo",
        apellidoP: "Frias",
        apellidoM: "Castro",
        edad : "85",
        direccion: {
            calle:"tercera cerrada de volcanes",
            Num: "45",
            colonia: "San joaquin",
            delegacion: "Coyoacan",
            codigoPostal: "85666"
        },
        amigos: ['Raul', 'Maria Juana'],
        usuario: "PablitoClavito",
        correo : "pablo.frias.castro@gmail.com",
        activo: true
    }
    
    console.log(user.nombre, user.apellidoP, user.apellidoM);

    if(user.activo){
        alert("Usuario activo")
    }else{
        alert("Usuario Inactivo")
    }

    console.log(user.edad);

    const friends = user.amigos;

    alert(friends);

    const dic = user.direccion;

    alert(user.direccion.calle + " " + user.direccion.Num + " " + user.direccion.colonia + " " + user.direccion.delegacion + " " + user.direccion.codigoPostal);



    
    

    


