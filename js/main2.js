// ------F1 eShop -------

//const eCarrito = new Carrito ([]);

inicializarApp();

function inicializarApp ()
{
    botonShop ();
    //botonTicket ();
    //botonRegistrarse ();
}

function botonShop ()
{
    const btn = document.getElementById("idshop");
    btn.addEventListener("click", () =>{
        
        cargarShops ();
    })
}

function cargarShops ()
{
    fetch("../js/data/productos.data.json")
    .then((response) => response.json())
    .then((json) => mostrarProductos(json))
    //.catch(() => alert("intente de nuevo"))
}

function mostrarProductos(productos)
{
    const div = document.createElement("div");
    div.innerText = "";
    productos.forEach(eShop => {

        const { image, model, precio, id} = eShop
//agregar imagen!!
        const divShop = document.createElement("div");
        divShop.innerHTML =`<h2>${model}</h2>
                            <p>${precio}</p>`

        const btn = document.createElement("button")
        btn.innerText = "Agregar al carrito"
        btn.addEventListener("click", () =>
            
            cargarProds(id, productos)
        );
        divShop.appendChild(btn);
        div.appendChild(divShop)

    })
    document.body.appendChild(div);
}

 function cargarProds (id, productos) 
{
   const objet = productos.find((producto)=> {
    return producto.id===id
   })
   
   
    console.log(objet)
}

function mostrarPost (post) 
{
    const {image, model, precio} = post;

    const divProd = document.createElement("prodContainer");
    divProd.innerText = "";
//agregar imagen!!
    const divShop = document.createElement("div");
    divShop.innerHTML =`<h2>${model}</h2>
                        <p>${precio}</p>`

    divProd.appendChild(divShop);
}
