class Producto{
constructor( id,nombre, precio,img,cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;

}
}

const calzaanimalblack = new Producto (1,"AnimalBlack", 3500, "fotosUmmaReal/calzayremeblondie.jpg");
const calzaCamuflada = new Producto(2,"Camuflada", 3000, "fotosUmmaReal/calzacamuflada.jpg" );
const calzaLeopardoB = new Producto(3,"leopardo Black", 4200,"fotosUmmaReal/animalblack.jpg");
const calzaDurazno = new Producto(4, "Texturizada Durazno", 4200,"fotosUmmaReal/calzadurazno.jpg");
const calzaClv = new Producto(5,"calza CLV", 4200,"fotosUmmaReal/celesterosa.jpg");
const calzaGrafito = new Producto(6,"Grafito", 4200,"fotosUmmaReal/grisgrafito.jpg");
const calzaStart = new Producto(7,"Start Black", 5700,"fotosUmmaReal/calzastartblack.jpg");
const calzaLeopardoF = new Producto(8,"Leopardo Fucsia", 4200,"fotosUmmaReal/animalrosada.jpg");
const biker1 = new Producto(9, "Biker Print",3500,"fotosUmmaReal/bikeranimaladelante.jpg");
const biker2 = new Producto(10, "Biker Animal", 3500,"fotosUmmaReal/bikerprintgrisadelante.jpg");
const biker3 = new Producto(11,"Biker Rosa",4200,"fotosUmmaReal/bikerprintmarronadelante.jpg");
const pescadora1 = new Producto(12, "Pescadora Pasteles", 4200,"fotosUmmaReal/pescadorapastelesadelante.jpg");
const pescadora2 = new Producto(13," pescadora b&w", 4200,"fotosUmmaReal/calzapesb&w.jpg");
const short1 = new Producto(14, "Shor Caricaturas", 3500,"fotosUmmaReal/shortcaricaturaatras.jpg");
const short2 = new Producto(15, "short flores pateles", 3500,"fotosUmmaReal/shortflores222.jpg");
const short3 = new Producto(16, "short humo", 3500,"fotosUmmaReal/shorthumoyremeadelante.jpg");
const top1 = new Producto(17, "yoga", 3500,"fotosUmmaReal/remeyshortconjuntoAzul.jpg");
const top2 = new Producto(18, "Conjunto Red", 3500,"fotosUmmaReal/conjuntoNuevored.jpg");
const top3 = new Producto(19, "encofrado rosa", 3200,"fotosUmmaReal/toprosaencofrado.jpg");
const top4 = new Producto(20, "MAMBO",3200,"fotosUmmaReal/topnegroair.jpg");
const top5 = new Producto(21, "top bloondlie", 3500,"fotosUmmaReal/topanimaladelante.jpg");
const top6 = new Producto(22, "encofrado lila", 3200,"fotosUmmaReal/topencofradolila.jpg");
const top7 = new Producto(23, "ecofrado fit",3200,"fotosUmmaReal/topencofradoceleste.jpg");
const top8 = new Producto(24, "Vibora", 3500,"fotosUmmaReal/topviboraadelante.jpg");
const remera1 = new Producto(25,"crotop azul",1600,"fotosUmmaReal/crotopazul.jpg");
const remera2 = new Producto(26, "crotop bordo",1600,"fotosUmmaReal/crotopbordo.jpg");
const remera3 = new Producto(27,"crotop rosa",1600,"fotosUmmaReal/crotoprosa.jpg");
const remera4 = new Producto(28,"remera carita",1800,"fotosUmmaReal/remecaritaadelante.jpg");
const remera5 = new Producto(29,"musculosa Air wind",3200 ,"fotosUmmaReal/musconegraadelante.jpg");
const remera6 = new Producto(30,"musculosa basica blanca",1800,"fotosUmmaReal/muscublanca.jpg");
const remera7 = new Producto(31,"musculosa basica beige",1800,"fotosUmmaReal/muscubeige.jpg");
const remera8 = new Producto(32,"musculosa Air wind gris",3200,"fotosUmmaReal/airdwind.jpg");

const productos = [
    calzaanimalblack,
    calzaCamuflada,
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
    top7,
    top8,
    remera1,
    remera2,
    remera3,
    remera4,
    remera5,
    remera6,
    remera7,
    remera8
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
    eliminarProducto(Producto.id);
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
