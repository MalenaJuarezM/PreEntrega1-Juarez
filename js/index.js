function interactuar() {
    console.log("Respondé las preguntas en el cuadro de diálogo.")

    let usuario = prompt("Te damos la bienvenida. ¿Cómo te llamás?")
    const maximoVeces = 5

    if (usuario !== "") {
        let respuesta = confirm(
            "Hola, " + usuario.trim() + ". ¿Querés conocer nuestros descuentos?"
        )
        if (respuesta) {
            consultarDescuento()
            console.warn("Recuerda: Cuantas más veces venís, menos pagás.")
            for (let i = 0; i < maximoVeces; i++) {
                let porcentaje = 5 * i
                console.log(
                    i + 1 + " prácticas por semana, " + porcentaje + " % de descuento."
                )
            }
        } else {
            alert("No hay problema. ¡Volvé pronto!")
        }
    } else {
        alert("No hemos entendido tu nombre.")
    }
}

function consultarDescuento() {
    let vecesPorSemana = parseInt(prompt("¿Cuántas veces por semana quieres venir?"))
    switch (vecesPorSemana) {
        case 1:
            alert("No tienes descuento.")
            break
        case 2:
            alert("Tienes un 5% de descuento.")
            break
        case 3:
            alert("Tienes un 10% de descuento.")
            break
        case 4:
            alert("Tienes un 15% de descuento.")
            break
        case 5:
            alert("Tienes un 20% de descuento.")
            break
        default:
            console.error("Obtenés descuento si venís entre 2 y 5 veces por semana.")
    }
}