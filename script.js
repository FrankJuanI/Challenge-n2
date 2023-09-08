const SVG = `<svg
width="38"
height="26"
viewBox="0 0 38 26"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#clip0_348_192)">
  <path
    d="M5.6857 1.63828L2.42856 5.97621V21.159C2.42856 21.7342 2.65733 22.2859 3.06455 22.6927C3.47178 23.0995 4.02409 23.328 4.59999 23.328H19.8C20.3759 23.328 20.9282 23.0995 21.3354 22.6927C21.7426 22.2859 21.9714 21.7342 21.9714 21.159V5.97621L18.7143 1.63828H5.6857Z"
    stroke="white"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M2.42856 5.97623H21.9714"
    stroke="white"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M16.5428 10.3141C16.5428 11.4646 16.0853 12.568 15.2708 13.3815C14.4564 14.195 13.3518 14.6521 12.2 14.6521C11.0482 14.6521 9.94355 14.195 9.12911 13.3815C8.31467 12.568 7.85712 11.4646 7.85712 10.3141"
    stroke="white"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>
<g clip-path="url(#clip1_348_192)">
  <path
    d="M31.7429 8.68747V16.2789"
    stroke="white"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M27.9429 12.4831H35.5429"
    stroke="white"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</g>
<defs>
  <clipPath id="clip0_348_192">
    <rect
      width="22.8"
      height="25.2143"
      fill="white"
      transform="translate(0.799988 0.0115356)"
    />
  </clipPath>
  <clipPath id="clip1_348_192">
    <rect
      width="11.4"
      height="10.5737"
      fill="white"
      transform="translate(26.0428 7.33179)"
    />
  </clipPath>
</defs>
</svg>`;

const autosDB = [
  {
    ID: 1,
    Precio: 25000,
    Marca: "Ford",
    Modelo: "Mustang",
    NombreDelVehículo: "Mustang GT 1967",
    AñoDelVehículo: 1967,
    CantidadDePuertas: 2,
    Categoría: "Muscle Car",
    EnOferta: true,
    Descuento: 2000,
    Imagen:
      "https://hips.hearstapps.com/hmg-prod/images/shelby-mustang-gt500-1967-01-64401bf3c1392.jpg",
  },
  {
    ID: 2,
    Precio: 22000,
    Marca: "Chevrolet",
    Modelo: "Camaro",
    NombreDelVehículo: "Camaro SS 1969",
    AñoDelVehículo: 1969,
    CantidadDePuertas: 2,
    Categoría: "Muscle Car",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_819020-MLA54973112148_042023-F.webp",
  },
  {
    ID: 3,
    Precio: 35000,
    Marca: "Jaguar",
    Modelo: "E-Type",
    NombreDelVehículo: "Jaguar E-Type Serie 1",
    AñoDelVehículo: 1961,
    CantidadDePuertas: 2,
    Categoría: "Deportivo",
    EnOferta: true,
    Descuento: 3000,
    Imagen:
      "https://www.hagerty.co.uk/wp-content/uploads/2020/05/E-Type-market1.jpg",
  },
  {
    ID: 4,
    Precio: 18000,
    Marca: "Volkswagen",
    Modelo: "Beetle",
    NombreDelVehículo: "Volkswagen Beetle 1967",
    AñoDelVehículo: 1967,
    CantidadDePuertas: 2,
    Categoría: "Económico",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=821,height=440/sites/default/files/cars_images/feed_712628/beetle01.jpganchorcentermodecropwidth1000",
  },
  {
    ID: 5,
    Precio: 28000,
    Marca: "Chevrolet",
    Modelo: "Impala",
    NombreDelVehículo: "Chevrolet Impala 1958",
    AñoDelVehículo: 1958,
    CantidadDePuertas: 4,
    Categoría: "Clásico",
    EnOferta: true,
    Descuento: 2500,
    Imagen:
      "https://cdn.dealeraccelerate.com/mce/1/1387/125173/1920x1440/1958-chevrolet-impala",
  },
  {
    ID: 6,
    Precio: 20000,
    Marca: "Porsche",
    Modelo: "911",
    NombreDelVehículo: "Porsche 911 1964",
    AñoDelVehículo: 1964,
    CantidadDePuertas: 2,
    Categoría: "Deportivo",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL0GjoaWryEKMQqR6UkwQTEp3m8RQCulNkDuGYfrk6CXUngwU1P25yKukaNxKrxZPMyA&usqp=CAU",
  },
  {
    ID: 7,
    Precio: 32000,
    Marca: "Mercedes-Benz",
    Modelo: "300SL",
    NombreDelVehículo: "Mercedes-Benz 300SL 1954",
    AñoDelVehículo: 1954,
    CantidadDePuertas: 2,
    Categoría: "Lujo",
    EnOferta: true,
    Descuento: 2800,
    Imagen:
      "https://media.goodingco.com/image/upload/c_fill,g_auto,q_88,w_1636/v1/Prod/FL22%20-%20Amelia%20Island%202022/470_1954%20Mercedes-Benz%20300%20SL%20Gullwing/1954_Mercedes-Benz_300_SL_Gullwing_20_sdmuh7",
  },
  {
    ID: 8,
    Precio: 19000,
    Marca: "IKA",
    Modelo: "GS Cupe",
    NombreDelVehículo: "Torino GS",
    AñoDelVehículo: 1973,
    CantidadDePuertas: 2,
    Categoría: "Deportivo",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/IKA_Torino_380_coup%C3%A9.jpg/1200px-IKA_Torino_380_coup%C3%A9.jpg",
  },
  {
    ID: 9,
    Precio: 40000,
    Marca: "Aston Martin",
    Modelo: "DB5",
    NombreDelVehículo: "Aston Martin DB5 1963",
    AñoDelVehículo: 1963,
    CantidadDePuertas: 2,
    Categoría: "Lujo",
    EnOferta: true,
    Descuento: 3500,
    Imagen:
      "https://www.topcarrating.com/aston-martin/1963-aston-martin-db5.jpg",
  },
  {
    ID: 10,
    Precio: 21000,
    Marca: "Chevrolet",
    Modelo: "Bel Air",
    NombreDelVehículo: "Chevrolet Bel Air 1957",
    AñoDelVehículo: 1957,
    CantidadDePuertas: 2,
    Categoría: "Clásico",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/57_Chevy_BelAir_2_Door_Hardtop.jpg",
  },
  {
    ID: 11,
    Precio: 26000,
    Marca: "Plymouth",
    Modelo: "Road Runner",
    NombreDelVehículo: "Plymouth Road Runner 1968",
    AñoDelVehículo: 1968,
    CantidadDePuertas: 2,
    Categoría: "Muscle Car",
    EnOferta: true,
    Descuento: 2200,
    Imagen:
      "https://i0.wp.com/moparinsiders.com/wp-content/uploads/2023/02/1968-Plymouth-HEMI-Road-Runner.-BringATrailer.-1.jpeg?fit=2048%2C1152&ssl=1",
  },
  {
    ID: 12,
    Precio: 23000,
    Marca: "Cadillac",
    Modelo: "Eldorado",
    NombreDelVehículo: "Cadillac Eldorado 1959",
    AñoDelVehículo: 1959,
    CantidadDePuertas: 2,
    Categoría: "Lujo",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/1959_Cadillac_Eldorado_Biarritz_convertible_in_Warsaw.jpg/1280px-1959_Cadillac_Eldorado_Biarritz_convertible_in_Warsaw.jpg",
  },
  {
    ID: 13,
    Precio: 29000,
    Marca: "Shelby",
    Modelo: "Cobra",
    NombreDelVehículo: "Shelby Cobra 1965",
    AñoDelVehículo: 1965,
    CantidadDePuertas: 2,
    Categoría: "Deportivo",
    EnOferta: true,
    Descuento: 2600,
    Imagen: "https://www.motortrend.com/uploads/f/75268203.jpg",
  },
  {
    ID: 14,
    Precio: 24000,
    Marca: "Pontiac",
    Modelo: "GTO",
    NombreDelVehículo: "Pontiac GTO 1969",
    AñoDelVehículo: 1969,
    CantidadVePuertas: 2,
    Categoría: "Muscle Car",
    EnOferta: false,
    Descuento: 0,
    Imagen:
      "https://hips.hearstapps.com/hmg-prod/images/1969-pontiac-gto-judgescreen-shot-2022-04-21-at-1-32-54-pm-1650563443.png",
  },
  {
    ID: 15,
    Precio: 31000,
    Marca: "Chevrolet",
    Modelo: "Camaro",
    NombreDelVehículo: "Chevlolet Camaro",
    AñoDelVehículo: 1973,
    CantidadDePuertas: 2,
    Categoría: "Deportivo",
    EnOferta: true,
    Descuento: "2700",
    Imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_650132-MLA71208584256_082023-F.webp",
  },
];

// TODO: Use filter()
const productosSinOfertas = [];
const productosConOfertas = [];
let carrito = [];

let strItems;
let items;

const obtenerProductos = () => {
  autosDB.forEach((producto) => {
    if (producto.EnOferta) {
      productosConOfertas.push(producto);
    } else {
      productosSinOfertas.push(producto);
    }
  });
};

const createElementWithClass = (tagName, className) => {
  const userCardDiv = document.createElement(tagName);
  userCardDiv.className = className;
  return userCardDiv;
};

const crearCard = (producto) => {
  const cardProdSO = createElementWithClass("div", "card");
  let headerCardProdSO;
  if (producto.EnOferta == true) {
    headerCardProdSO = createElementWithClass("div", "header-card oferta");
  } else {
    headerCardProdSO = createElementWithClass("div", "header-card");
  }
  const footerCardProdSO = createElementWithClass("div", "footer-card");
  cardProdSO.appendChild(headerCardProdSO);
  cardProdSO.appendChild(footerCardProdSO);
  return cardProdSO;
};

const loadCardInfoDestacados = (cardProdSO, producto) => {
  const headerCardProdSO = cardProdSO.querySelector(".header-card");

  headerCardProdSO.innerHTML = `
    <div class="product-image">
      <img src="${producto.Imagen}" alt="" />
    </div>
    <div>
      <h3>Vehiculo: ${producto.NombreDelVehículo}</h3>
      <p>Año: ${producto.AñoDelVehículo}</p>
      <p>Puertas: ${producto.CantidadDePuertas}</p>
      <p>Categoria: ${producto.Categoría}</p>
    </div>
  `;
  const footerCardProdSO = cardProdSO.querySelector(".footer-card");

  footerCardProdSO.innerHTML = `
      <div class="footer-card">
              <button onclick="addToCar(${producto.ID}); cargarCarrito()" class="addCard-button">
                ${SVG}
              </button>
              <div class="footer">
                <div class="prices">
                  <h3 class="offer-price">$ ${producto.Precio}</h3>
                </div>
              </div>
        </div>
  `;
  return cardProdSO;
};

const loadCardInfoOfertas = (cardProdSO, producto) => {
  const headerCardProdSO = cardProdSO.querySelector(".header-card");
  headerCardProdSO.innerHTML = `
    <div class="product-image">
      <img src="${producto.Imagen}" alt="" />
    </div>
    <div>
      <h3>Vehiculo: ${producto.NombreDelVehículo}</h3>
      <p>Año: ${producto.AñoDelVehículo}</p>
      <p>Puertas: ${producto.CantidadDePuertas}</p>
      <p>Categoria: ${producto.Categoría}</p>
    </div>
  `;
  const footerCardProdSO = cardProdSO.querySelector(".footer-card");
  footerCardProdSO.innerHTML = `
      <div class="footer-card">
              <button onclick="addToCar(${
                producto.ID
              }); cargarCarrito()" class="addCard-button">
                ${SVG}
              </button>
              <div class="footer oferta">
                <div class="prices">
                  <p class="old-price"> $${producto.Precio}</p>
                  <h3 class="offer-price">$ ${
                    producto.Precio - producto.Descuento
                  }</h3>
                </div>
              </div>
        </div>
  `;
  return cardProdSO;
};

const loadCardsFunction = (productosSinOfertas, productosConOfertas) => {
  productosSinOfertas.forEach((producto) => {
    cardProdSO = crearCard(producto);
    carItems = producto.JSON;
    cardConInfo = loadCardInfoDestacados(cardProdSO, producto);
    containerProductosDestacados = document.querySelector(
      ".productos-destacados"
    );
    containerProductosDestacadoss =
      containerProductosDestacados.querySelector(".cards");
    containerProductosDestacadoss.appendChild(cardConInfo);
  });

  productosConOfertas.forEach((producto) => {
    cardProdSO = crearCard(producto);
    cardConInfo = loadCardInfoOfertas(cardProdSO, producto);
    containerProductosEnOferta = document.querySelector(".productos-en-oferta");
    containerProductosEnOferta =
      containerProductosEnOferta.querySelector(".cards");
    containerProductosEnOferta.appendChild(cardConInfo);
  });
};

const obtenerCarrito = () => {
  let carritoString = localStorage.getItem("products");
  carrito = JSON.parse(carritoString) || [];
  return carrito;
};

const addToCar = (id) => {
  carrito = obtenerCarrito();
  carrito.push(id);
  localStorage.setItem("products", JSON.stringify(carrito));
};

const abrirCarrito = () => {
  const carritoContainer = document.querySelector(".carrito-container");
  carritoContainer.style.display = "flex";
  document.body.style.overflow = "hidden";
};

const cerrarCarrito = () => {
  const carritoContainer = document.querySelector(".carrito-container");
  carritoContainer.style.display = "none";
  document.body.style.overflow = "auto";
};

const findProducto = (id) => {
  return autosDB.find((auto) => {
    return auto.ID == id;
  });
};

const loadCarProducto = (producto, id) => {
  const info = findProducto(id);
  console.log("Info: ", info);
  producto.innerHTML = `
    <img
      src="${info.Imagen}"
      alt=""
    />
    <h3>${info.NombreDelVehículo}</h3>
    <div class="cantidad-del-producto">
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/10172/10172067.png"
          alt=""
        />
      </button>
      <p>1</p>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9312/9312231.png"
          alt=""
        />
      </button>
    </div>
  `;
  return producto;
};

const agregarALista = (id) => {
  const listaProductos = document.querySelector(".lista-de-productos");
  const porducto = createElementWithClass("div", "producto-carrito");
  loadCarProducto(porducto, id);
  console.log("lista Productos div: ", listaProductos);
  listaProductos.appendChild(porducto);
};

const cargarCarrito = () => {
  const carrito = obtenerCarrito();
  carrito.forEach((id) => {
    agregarALista(id);
  });
};

const main = () => {
  obtenerProductos();
  loadCardsFunction(productosSinOfertas, productosConOfertas);
  cargarCarrito();
};

window.addEventListener("load", (event) => {
  main();
});
