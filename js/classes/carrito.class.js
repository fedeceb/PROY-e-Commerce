class Carrito {

    constructor(productos)
    {
        this.productos = productos;
    }

    agregarProducto(productos)
    {
        const esta = this.productos.find(eShop=>productos.id===eShop.id);

        if (esta)
        {
            esta.cantidad = productos.cantidad + esta.cantidad
        }
        else 
        {
            this.productos.push(productos);
        }
    }

    calcularTotal ()
    {
        let total = 0;
        for (let i=0; i<this.productos.length; i++)
        {
            total+=this.productos[i].precio*this.productos[i].cantidad;
        }
        return total;
    }

    vaciarCarrito ()
    {
        this.productos = [];
    }

    borrarProducto(producto)
    {
        const prodBorar = this.productos.find(eShop=>producto.id===eShop.id);
        console.log("prod a borrar");
        console.log(prodBorar);

        const index = this.productos.indexOf(prodBorar);

        this.productos.splice(index,1);
    }
}