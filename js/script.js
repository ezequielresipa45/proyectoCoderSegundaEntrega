/* FUNCIONES  ✔
   METODOS
   CLASES  ✔
   OBJETOS  ✔
   ARREGLOS  ✔
   BUCLES ✔
   CONDICIONALES ✔
   LOCAL STORAGE ✔
   DOM  ✔
   EVENTOS ✔


*/

let formulario = document.getElementById("formulario");

let principial = document.getElementsByClassName("principal")[0];

let botonAgregar = document.getElementById("botonAgregar");

let botonUsuarios = document.getElementById("botonUsuarios");

let contenedorUsuariosRegistrados = document.getElementById(
  "contenedorUsuariosRegistrados"
);

let contenedorErrorEdad = document.getElementsByClassName(
  "contenedorErrorEdad"
)[0];

botonAgregar.addEventListener("click", () => {
  formulario.style.display = "flex";
  principial.style.display = "none";
});

// BOTON PARA  INGRESO DE USUARIOS, OTRO BOTON PARA VER LOS USUARIOS INGRESADOR

class Usuarios {
  constructor(nombre, apellido, edad, correo, genero) {
    this.nombre = nombre;

    this.apellido = apellido;

    this.edad = edad;

    this.correo = correo;

    this.genero = genero;

    this.id = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
  }
}

let arregloLocalStorageParse =
  JSON.parse(localStorage.getItem("listaUsuarios")) ?? [];

let arregloUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) ?? [];

console.log(arregloUsuarios);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombreInputValue = document.getElementById("nombre").value;
  let apellidoInputValue = document.getElementById("apellido").value;
  let edadInputValue = document.getElementById("edad").value;
  let correoInputValue = document.getElementById("correo").value;
  let select = document.getElementById("select");
  let selectValues = select.options[select.selectedIndex].value;

  if (edadInputValue >= 18) {
    let usuarioCreado = new Usuarios(
      nombreInputValue,
      apellidoInputValue,
      edadInputValue,
      correoInputValue,
      selectValues
    );

    arregloUsuarios.push(usuarioCreado);

    //GUARDAR EN LOCALSTORAGE

    const guardarLocal = (clave, valor) => {
      localStorage.setItem(clave, valor);
    };

    //ALMACENAR USUARIOS

    for (const usuario of arregloUsuarios) {
      guardarLocal("listaUsuarios", JSON.stringify(arregloUsuarios));
    }


    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El usuario ah sido registrado',
        showConfirmButton: false,
        timer: 2000
      })

  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario ingresado es menor de edad.',
        
      })
  }
});

botonUsuarios.addEventListener("click", () => {
  contenedorUsuariosRegistrados.style.display = "flex";
  principial.style.display = "none";
});

for (let index = 0; index < arregloLocalStorageParse.length; index++) {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `<p> ${arregloLocalStorageParse[index].nombre} </p>
       <p> ${arregloLocalStorageParse[index].apellido} </p>
       <p> ${arregloLocalStorageParse[index].edad} </p>
       <p> ${arregloLocalStorageParse[index].correo} </p>
       <p> ${arregloLocalStorageParse[index].genero} </p>
       <p> ${arregloLocalStorageParse[index].id} </p>`;

  contenedorUsuariosRegistrados.appendChild(parrafo);
}
