let productosCarro = [];

if (localStorage.getItem("productos")) {
  productosCarro = JSON.parse(localStorage.getItem("productos"));
  console.log(productosCarro);
  actualizarCarro(productosCarro);
}

function actualizarCarro(listadoProductos) {
  localStorage.setItem("productos", JSON.stringify(listadoProductos));

  const valorInicial = 0;
  const sumaProductos = listadoProductos.reduce(
    (accumulator, producto) => accumulator + producto.cantidad,
    valorInicial
  );

  document.querySelector("#cantidad-productos").innerText = sumaProductos;
}

cargarTablaProductos()

function cargarTablaProductos() {
  let acumuladorFilas = "";

  productosCarro.forEach((producto, index) => {
    let template = `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${producto.sku}</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>${producto.cantidad}</td>
                <td>@mdo</td>
            </tr>
    `;
    acumuladorFilas += template;
  });

  document.querySelector("#productos-carrito tbody").innerHTML =
    acumuladorFilas;
}