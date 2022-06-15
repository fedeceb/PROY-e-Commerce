// ----- F1 - SHOP -------

console.log(productos);
console.log(circuitos);


inicializarApp ();

function inicializarApp()
{
    crearTitulo ();
    crearMenu ();
}


function listaShop ()
{
    const liShop = document.createElement("ul");

    productos.forEach((producto) =>{
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${producto.model}`;
        liShop.appendChild(nodoli);
    });
    document.body.appendChild(liShop);
}


// ------- EVENTOS --------

function crearTitulo()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "F1 store";

    tituloH1.classList.add("miTitulo");

    document.body.appendChild(tituloH1);
}

function crearMenu() 
{
    const opciones = ["SHOP", "TICKETS","REGISTRARSE"]
    opciones.forEach((opcion)=>{
        const boton = document.createElement("button");

        if (opcion === "SHOP")
        {
            boton.addEventListener("click", ()=>{
                listaShop ();
            })
        }
        
        if (opcion === "TICKETS")
        {
            boton.addEventListener("click", ()=>{
                listaTickets ();
            })
        }

        else if (opcion === "REGISTRARSE")
        {
            boton.addEventListener("click", ()=>{
                registroUsuario();
            })
        }

        boton.innerHTML = opcion;
        document.body.appendChild(boton);
    })
}

function listaTickets()
{
    const liTickets = document.createElement("ul");
    
    circuitos.forEach((circuito) =>{
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${circuito.circuit}`;
        liTickets.appendChild(nodoli);
    });
    document.body.appendChild(liTickets);
}

function buscarProds ()
{
    let nombre = prompt("Ingresar producto");

    let encontrados = productos.filter((producto) => producto.model.toLowerCase().indexOf(model.toLocaleLowerCase())!==-1);
}

function registroUsuario ()
{
    let datoNombre = prompt("Ingresa tu nombre y apeliido");
    localStorage.setItem("NOMBRE Y APELLIDO", datoNombre);

    let datoUsuario = prompt("Ingresa tu usuario");
    localStorage.setItem("USER", datoUsuario);

    let datoMail = prompt("Ingresa mail");
    localStorage.setItem("MAIL", datoMail);

    let datoContraseña = Number(prompt("Ingresa contraseña (solo numerica)"));
    localStorage.setItem("CLAVE", datoContraseña);
}

