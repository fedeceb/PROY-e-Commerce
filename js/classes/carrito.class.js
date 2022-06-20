class Carrito {

    constructor(productos)
    {
        this.productos = productos;
    }

    agregarProducto(producto)
    {
        const esta = this.productos.find(eShop=>producto.id===eShop.id);

        if (esta)
        {
            esta.cantidad = producto.cantidad + esta.cantidad
        }
        else 
        {
            this.productos.push(producto);
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
        const prodBorrar = this.productos.find(eShop=>producto.id===eShop.id);
        console.log("prod a borrar");
        console.log(prodBorrar);

        const index = this.productos.indexOf(prodBorrar);

        this.productos.splice(index,1);
    }
}