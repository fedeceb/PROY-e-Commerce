// ------F1 eShop -------

const eCarrito = new Carrito ([]);

inicializarApp();

function inicializarApp ()
{
    botonShop ();
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
    fetch(`js/data/productos.data.js`)
    .then((response) => response.json())
    .then((json) => mostrarProductos(json))
    .catch(() => alert("intente de nuevo"))
}

function mostrarProductos(data)
{
    const divProd = document.createElement("prodContainer");
    divProd.innerText = "";
    data.forEach(eShop => {

        const { image, model, precio, id} = eShop
//agregar imagen!!
        const divShop = document.createElement("div");
        divShop.innerHTML =`<h2>${model}</h2>
                            <p>${precio}</p>`

        const btn = document.createElement("button")
        btn.innerText = "Agregar al carrito"
        btn.addEventListener("click", () =>
            
            cargarProds(id)
        );
        divShop.appendChild(btn);
        divProd.appendChild(divShop)
    })
}

async function cargarProds (id) 
{
    try {
        let response = await fetch (`js/data/productos.data.js/${id}`);
        let json = await response.json();
        mostrarPost(json)
    }
    catch {
        alert("error!!");
    }
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