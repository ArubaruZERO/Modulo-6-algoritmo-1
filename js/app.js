
// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [
    {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
    },
    {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
    },
    {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
    },
];


//Creacion de HTML dinamico y representar seleccion de unidades para cada producto
//En HTML tenemos un div "product-list-container"
var container = document.getElementById("product-list-container")

var createDescription = product => {
    var description = document.createElement("h5");
        description.innerText = product.description;
        container.appendChild(description); 
         var input = document.createElement("input");
         input.setAttribute("class", "product-unit");
         input.setAttribute("type", "number");
         input.setAttribute("value", 1);
         product.units = 1;
         input.addEventListener("change", event =>{ 
             product.units = parseInt(event.target.value)
             statusButton();
        }) ;
         
         container.appendChild(input);
         
}




var showProducts = productList => {
    for (const product of productList) {
        createDescription(product)
    }

}
showProducts(products);


//Creacion del calculo del subtotal
function subTotal() {
    let subtotal = 0
    
    for (var i = 0 ; i < products.length ; i++) {
    
        subtotal += (products[i].price * products[i].units);
        
}

return subtotal;
}

getSubtotal = () => {
    document.getElementById("sub-total").innerText = subTotal();
}

// //Creacion del calculo del IVA
 function Iva() {
     let iva = 0
    
     for (var i = 0 ; i < products.length ; i++) {
    
         iva  += ((products[i].tax / 100) * products[i].units);
       
 }

 return iva;
}

 getIva = () => {
     document.getElementById("iva").innerText = Iva();
 }

// //Creacion del calculo total
function TotalCompra() {
    let total = 0
   
    for (var i = 0 ; i < products.length ; i++) {
   
        total = Iva() + subTotal() ;
}

return total;
}

getTotalCompra = () => {
    document.getElementById("total").innerText = TotalCompra();
}

// Boton calcular

let calc = () =>{
    getSubtotal();
    getIva();
    getTotalCompra();
}

    document.getElementById("button").addEventListener("click", ()=>calc());
    
//Cancelar boton calcular
//solo funciona para cuando hay 1 producto en 0
function statusButton () {
   for ( i = 0 ; i < products.length ; i++){ 
    if(products[0,i].units === 0) {
        document.getElementById("button").disabled = true;
       
    } else {
        
        document.getElementById("button").disabled = false; // Enabled
    }
 }
}

 
