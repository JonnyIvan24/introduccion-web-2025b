var edad = Number(prompt("ingresa tu edad"))

if (edad > 20) {
    console.log("eres mayor de 20 años")
} else if (edad === 20) {
    console.log("Tienes 20 años")
} else {
    console.log("Eres menor de 20 años")
}

if (edad >= 0 && edad < 20) {
    console.log("eres menor de 20 años")
} else if (edad >= 20 && edad <= 40) {
    console.log("Tienes entre 20 y 40 años")
} else {
    console.log("Eres mayor de 40 años")
}

switch (new Date().getDay()) {
    case 6:
        text = "Hoy es sábado"
        break;
    case 0:
        text = "Hoy es domingo"
        break;
    default:
        text = "Hoy es un día entre semana"
}

document.write(text)
