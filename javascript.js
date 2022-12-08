window.onbeforeunload = function(){
    return 'Are you sure you want to leave?';
  };

const age = prompt("Ingrese su edad");
const postalCode = prompt("Ingrese su código postal.")

if(age < 18) {
    alert("Al no ser mayor, ingresa a este sitio bajo su propia responsabilidad.");
}

function shippingCost() {
    if(postalCode == 2900) {
        alert("Ya que usted es residente de San Nicolás de los Arroyos el envío será gratis");
    } else {
        alert("El envio le costará $1000. Envío gratis disponible solo para residentes de San Nicolás de los Arroyos")
    }
}