// ------F1 eShop -------

const eCarrito = new Carrito ([]);

inicializarApp();

function inicializarApp ()
{
    botonCarrito ();
    totalCarrito ();
    progVaciarCarrito ();
}

// FUNCIONES INICIALES

cargarData ();
function cargarData ()
{
    fetch("../js/data/productos.data.json")
    .then((response) => response.json())
    .then((json) => mostrarProductos(json))
    //.catch(() => alert("intente de nuevo"))
}

function mostrarProductos(productos)
{
    const div = document.getElementById("cargar-productos");
    div.innerText = "";
    productos.forEach(eShop => {

        const { image, model, precio, id} = eShop

        const divShop = document.createElement("div");
        divShop.innerHTML =`<img src='${image}'/><br>
                            <h2>${model}</h2><br>
                            <p>$${precio}</p><br>`

        const btn = document.createElement("button")
        btn.innerHTML = "Agregar al carrito"
        mostrarCarrito();
        btn.addEventListener("click", () =>{ 

            Toastify({
                text:"Se agregó al carrito",
                duration: 3000,
                position: 'right',
                gravity: 'bottom',
                onClick: () => {mostrarCarrito();}
            }).showToast();

            const productoParaCarrito = {
                ...eShop,
                cantidad:1,
            }
            
            eCarrito.agregarProducto(productoParaCarrito);
            cargarProds(id, productos);
            console.log("carrito", eCarrito);
        });

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

/*---- FUNCIONES CARRITO ------*/ 

function botonCarrito ()
{
    const btnCarrito = document.getElementById("btn-carrito");
    btnCarrito.addEventListener("click", () =>{
        mostrarCarrito();
    })
}

function mostrarCarrito ()
{
    const divCarrito = document.getElementById("ecarrito");
    divCarrito.innerHTML="";
    eCarrito.productos.forEach(eShop =>{
        const div = document.createElement("div");

        const { image, model, precio} = eShop

        div.innerHTML= `<img src='${image}' width="200px"/><br>
                        ${model}<br>
                        $${precio*eShop.cantidad}<br>
                        Cantidad: ${eShop.cantidad}`

        const btnBorrar = document.createElement("button");
        btnBorrar.innerHTML = "Borrar articulo"
        btnBorrar.addEventListener("click", () =>{
            borrarProducto(eShop);
        })
        div.appendChild(btnBorrar);

        divCarrito.appendChild(div);
    })
    totalCarrito ();
}

function totalCarrito()
{
    const divTotal = document.getElementById("totalcarrito");
    divTotal.innerHTML = "";
    total = eCarrito.calcularTotal ();

    divTotal.innerHTML = "TOTAL: $" + total.toFixed(2);
}

function progVaciarCarrito () //crear btn en index
{
    const btn = document.getElementById("vaciarCarrito")
    btn.addEventListener("click", () =>{

        swal({
            title: "Estas seguro?",
            text: "Si acepta, se eliminaran todos sus productos del carrito",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                
                    swal("Todos sus productos han sido eliminados", {
                    icon: "success",
                    });
                    eCarrito.vaciarCarrito();
                    mostrarCarrito();
                } 
                else {
                swal("Sus productos no se han eliminado");
                }
            });
    })
}

function borrarProducto (producto)
{
    eCarrito.borrarProducto(producto);
    mostrarCarrito ();
}