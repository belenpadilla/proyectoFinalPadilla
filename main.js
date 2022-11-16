class Producto{
constructor( id,nombre, precio,img,cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;

}
}


const calzaLeopardoB = new Producto(1,"leopardo Black", 4200,"fotosUmmaReal/animalblack.jpg");
const calzaDurazno = new Producto(2, "Texturizada Durazno", 4200,"fotosUmmaReal/calzadurazno.jpg");
const calzaClv = new Producto(3,"calza CLV", 4200,"fotosUmmaReal/celesterosa.jpg");
const calzaGrafito = new Producto(4,"Grafito", 4200,"fotosUmmaReal/grisgrafito.jpg");
const calzaStart = new Producto(5,"Start Black", 5700,"fotosUmmaReal/calzastartblack.jpg");
const calzaLeopardoF = new Producto(6,"Leopardo Fucsia", 4200,"fotosUmmaReal/animalrosada.jpg");
const biker1 = new Producto(7, "Biker Print",3500,"fotosUmmaReal/bikeranimaladelante.jpg");
const biker2 = new Producto(8, "Biker Animal", 3500,"fotosUmmaReal/bikerprintgrisadelante.jpg");
const biker3 = new Producto(9,"Biker Rosa",4200,"fotosUmmaReal/bikerprintmarronadelante.jpg");
const pescadora1 = new Producto(10, "Pescadora Pasteles", 4200,"fotosUmmaReal/pescadorapastelesadelante.jpg");
const pescadora2 = new Producto(11," pescadora b&w", 4200,"fotosUmmaReal/calzapesb&w.jpg");
const short1 = new Producto(12, "Shor Caricaturas", 3500,"fotosUmmaReal/shortcaricaturaatras.jpg");
const short2 = new Producto(13, "short flores pateles", 3500,"fotosUmmaReal/shortflores222.jpg");
const short3 = new Producto(14, "short humo", 3500,"fotosUmmaReal/shorthumoyremeadelante.jpg");
const top1 = new Producto(15, "yoga", 3500,"fotosUmmaReal/remeyshortconjuntoAzul.jpg");
const top2 = new Producto(16, "Conjunto Red", 3500,"fotosUmmaReal/conjuntoNuevored.jpg");
const top3 = new Producto(17, "encofrado rosa", 3200,"fotosUmmaReal/toprosaencofrado.jpg");
const top4 = new Producto(18, "MAMBO",3200,"fotosUmmaReal/topnegroair.jpg");
const top5 = new Producto(19, "top bloondlie", 3500,"fotosUmmaReal/topanimaladelante.jpg");
const top6 = new Producto(20, "encofrado lila", 3200,"fotosUmmaReal/topencofradolila.jpg");
const remera1 = new Producto(21,"crotop azul",1600,"fotosUmmaReal/crotopazul.jpg");
const remera2 = new Producto(22, "crotop bordo",1600,"fotosUmmaReal/crotopbordo.jpg");
const remera3 = new Producto(23,"crotop rosa",1600,"fotosUmmaReal/crotoprosa.jpg");
const remera4 = new Producto(24,"remera carita",1800,"fotosUmmaReal/remecaritaadelante.jpg");

const productos = [
    calzaLeopardoB,
    calzaDurazno,
    calzaClv,
    calzaGrafito,
    calzaStart,
    calzaLeopardoF,
    biker1,
    biker2,
    biker3,
    pescadora1,
    pescadora2,
    short1,
    short2,
    short3,
    top1,
    top2,
    top3,
    top4,
    top5,
    top6,
    remera1,
    remera2,
    remera3,
    remera4
];

let carrito = [];


const todosLosProductos = document.getElementById("todosLosProductos");

const verProductos = () => {
    productos.forEach((Producto) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-xl-3", "col-md-6","col-sm-12");
        tarjeta.innerHTML = `
        <div class="card ordenTarjetasInicio col-4" style="width: 16rem;">
        <img src="${Producto.img}" class="card" alt="${Producto.nombre}">
        <div class="card-body">
        <h3 class="card-title">${Producto.nombre}</h3>
        <p class="card-text">Talle S - M</p>
        <p class="card-text">${Producto.precio}</p>
        <button class="btn colorBotones" id="boton${Producto.id}">Agregar al carrito </button>
        </div>
    </div>`

    todosLosProductos.appendChild(tarjeta);

    const boton = document.getElementById(`boton${Producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(Producto.id)
    })
    })
}

const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id)
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        carrito.push(producto);
    }
    calcularCompra();
}


verProductos();

const divCarrito = document.getElementById("divCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

const mostrarCarrito = () => {
    divCarrito.innerHTML="";
    carrito.forEach((Producto) =>{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-xl-3", "col-md-6","col-sm-12");
        tarjeta.innerHTML = `
        <div class="card ordenTarjetasInicio col-4" style="width: 16rem;">
        <img src="${Producto.img}" class="card" alt="${Producto.nombre}">
        <div class="card-body">
        <h3 class="card-title">${Producto.nombre}</h3>
        <p class="card-text">Talle S - M</p>
        <p class="card-text">${Producto.precio}</p>
        <p class="card-text">${Producto.cantidad}</p>
        <button class="btn colorBotones" id="eliminar${Producto.id}">Eliminar</button>
    </div>
    </div>`

    divCarrito.appendChild(tarjeta);

    const boton = document.getElementById(`eliminar${Producto.id}`);
    boton.addEventListener("click", () => {
    eliminarProducto(Producto.id)
    })
})
    calcularCompra();
}


const eliminarProducto = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
}


const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", ( ) => {
eliminarCompra();
})

const eliminarCompra = () => {
    carrito = [];
    mostrarCarrito();
}

const total = document.getElementById("total");

const calcularCompra = () => {
    let totalPagar = 0;
    carrito.forEach((producto) => {
        totalPagar += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalPagar}`;

}

const jsonProductos = JSON.stringify(productos);

vaciarCarrito.addEventListener("click",()=>{
    Toastify({
        text: "Su carrito esta vacio",
        duration: 3500,
        gravity: "top",
        position:"left",
    }).showToast();
})