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
        alert("El envio será gratis");
    } else {
        alert("El envio le costará $1000")
    }
}