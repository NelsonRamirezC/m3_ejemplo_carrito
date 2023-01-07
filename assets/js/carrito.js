let productos = [
    {
        sku: "0001",
        nombre:"Producto 1",
        descripcion: "Descripcion producto 1",
        precio: 1000,
        imagen: "https://picsum.photos/id/684/600/400"
    },
    {
        sku: "0002",
        nombre:"Producto 2",
        descripcion: "Descripcion producto 2",
        precio: 1500,
        imagen: "https://picsum.photos/id/685/600/400"
    },
    {
        sku: "0003",
        nombre:"Producto 3",
        descripcion: "Descripcion producto 3",
        precio: 2000,
        imagen: "https://picsum.photos/id/686/600/400"
    }
]
let productosCarro = [];

if(localStorage.getItem("productos")){
    productosCarro = JSON.parse(localStorage.getItem("productos"))
    console.log(productosCarro)
    actualizarCarro(productosCarro);
}


cargarProductos(productos);

//FUNCION ENCARGADA DE CARGAR PRODUCTOS
function cargarProductos(listadoProductos){

    let acumulador = "";
    listadoProductos.forEach(producto => {
    
        let template = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card m-auto my-3" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <a class="btn btn-primary" data-sku="${producto.sku}" onclick="addToCart('${producto.sku}')">Comprar</a>
                    </div>
                </div>
            </div>
        `
        acumulador += template;
    })

    document.querySelector("#productos .row").innerHTML = acumulador;

}




function addToCart(sku) {
    let objProducto = {
        codigo: sku,
        cantidad: 1
    }
    productosCarro.push(objProducto)
    
    localStorage.setItem("productos", JSON.stringify(productosCarro))
    actualizarCarro(productosCarro); 

}

function actualizarCarro(listadoProductos){
    document.querySelector("#cantidad-productos").innerText = listadoProductos.length
}