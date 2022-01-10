let creditCardName = document.getElementById('credit_Card_Name');
let creditCardName2 = document.getElementById('credit_Card_Name');

// let upperCardName = creditCardName.toUpperCase();

//btn form
let btn = document.getElementById('btn-Form').addEventListener("click", function (e) {
    e.preventDefault();
    validarTarjeta();

    console.log(creditCardName2);
})
//Dom
let dom = document.getElementById('inner')
// let table_creditCard_Ref = Document.getElementById('table_creditCard');
// Solicitar al usuario que ingrese su tarjeta (ej: "Visa")
// Si la tarjeta es American Express, indicar que la compra es en 1 pago
// Si la tarjeta es Visa o Mastercard, solicitar la cantidad de cuotas (ej: "6")
// Si el valor ingresado es 1, indicar que no tiene recargo.
// En caso contrario:
// Si el valor ingresado es 3, indicar que el recargo es del 5%
// Si el valor ingresado es 6, indicar que el recargo es del 10%
// Si el valor ingresado es 12, indicar que el recargo es del 25%
// Si el valor ingresado no es ni 3 ni 6 ni 12, indicar que no es válido

//function
function validarTarjeta() {
    if (creditCardName.value === "") {
        tarjetaNovalida();

    } else {
        tarjetaValida();
    }
}

//function
function tarjetaNovalida() {
    alert("Ingrese el nombre de su tarjeta");
}

//function
function tarjetaValida() {

    if (creditCardName.value != "american" && creditCardName.value != "americanexpress" &&
        creditCardName.value != "visa" && creditCardName.value != "master"
        && creditCardName.value != "mastercard") {
        alert("solo se acepta VISA,MASTER Y AMERICAN")
        document.getElementById('form_Tarjeta').reset();
    }

    if (creditCardName.value === "american" || creditCardName.value === "americanexpress") {
        console.warn("Tarjeta AmericanExpress")
        console.log("American express en 1 pago no tiene interes")

        dom.innerHTML = "";
        dom.innerHTML += (creditCardName.value);
        dom.innerHTML += " en 1 pago no tiene interes"
        document.getElementById('form_Tarjeta').reset();

    }
    else if (creditCardName.value === "visa" || creditCardName.value === "master") {
        let pagoIngresado = prompt("Indicar Cantidad de pagos")

        if (pagoIngresado == 3) {
            // console.warn("el pago es 3 cuotas")
            // console.log("tiene 5% de recargo")
            dom.innerHTML = "";
            dom.innerHTML += (creditCardName.value + " | ");
            dom.innerHTML += (pagoIngresado + " pagos" + " | 5% DE RECARGO");
            document.getElementById('form_Tarjeta').reset();

        } else if (pagoIngresado == 6) {
            // console.warn("el pago es 6 cuotas")
            // console.log("tiene 10% de recargo")
            dom.innerHTML = "";
            dom.innerHTML += (creditCardName.value + " | ");
            dom.innerHTML += (pagoIngresado + " pagos" + " | 10% DE RECARGO");
            document.getElementById('form_Tarjeta').reset();

        } else if (pagoIngresado == 12) {
            // console.warn("el pago es 12 cuotas")
            // console.log("tiene 25% de recargo")
            dom.innerHTML = "";
            dom.innerHTML += (creditCardName.value + " | ");
            dom.innerHTML += (pagoIngresado + " pagos" + " | 25% DE RECARGO");
            document.getElementById('form_Tarjeta').reset();

        } else if (pagoIngresado != 1 && pagoIngresado != 3 && pagoIngresado != 6 && pagoIngresado != 12) {
            // console.warn("Cantidad de pagos incorrecto")
            // console.log("Ingrese [3, 6 o 12]")
            alert("Cantidad de pagos incorrecto")
            dom.innerHTML = "";
            // dom.innerHTML += "| Cantidad de pagos incorrecto";
            dom.innerHTML += "| Ingrese [3, 6 o 12 pagos]";
            document.getElementById('form_Tarjeta').reset();

        }else if (pagoIngresado == 1) {
            // console.warn("el pago es 6 cuotas")
            // console.log("tiene 10% de recargo")
            dom.innerHTML = "";
            dom.innerHTML += (creditCardName.value + " | ");
            dom.innerHTML += (pagoIngresado + " pago" + " | Sin recargo");
            document.getElementById('form_Tarjeta').reset();

        }
    }
}



