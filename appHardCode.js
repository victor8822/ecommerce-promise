// Usamos practicamente la misma funcion de app.js con algunas pocas diferencias que estaran comentadas

const delay = (interval = 1000, data) => {
    // con el siguiente codigo podemos hacer que el efecto de esperar un segundo se reproduzca cada vez
    // que hacemos click en el boton ↓↓↓↓↓↓  Lo dejamos comentado ya que al ser el mismo contenido no hace falta
    // document.getElementById('contenedorHC').innerHTML = ""
    // sin embargo internamente si esta haciendo el timeout solo que como usuario no lo vemos

    //hacemos una nueva promesa con un setTimeout como se pidio en la tarea de 1 Xs segundos
    return new Promise((resolve) => {
      setTimeout(() => {resolve(data)}, interval)
    })
}

// la unica diferencia con la otra funcion, es que en esta no traemos los datos de una api, si no del array que creamos previamente
// y que en este caso no verificamos los error de status
const renderItems = (data = []) => {
  
  let tiendasHC = ""

  data.forEach( tiendaHC => {
      tiendasHC += `<div class='productos'>
      <img class='poster' src="${tiendaHC.img}">
      <h3 class='titulo'>${tiendaHC.title}</h3>
      <p class='price'>$${tiendaHC.price}</p>
      </div>`
  })
  document.getElementById('contenedorHC').innerHTML = tiendasHC
}