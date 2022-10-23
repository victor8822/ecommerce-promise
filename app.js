const json = {
    items: [
    {
        title: 'Leche de fórmula en polvo sin gluten Nestlé Nan Optipro 3 en lata de 800g - 2 a 3 años',
        img: 'https://http2.mlstatic.com/D_NQ_NP_976707-MLA50432404819_062022-V.webp',
        price: 13790
    },
    {
        title: 'MÁS VENDIDO Leche de fórmula en polvo Nestlé Nido 1+ Protectus en lata de 1.6kg - 12 meses 3 años',
        img: 'https://http2.mlstatic.com/D_NQ_NP_658179-MLA49575506482_042022-V.webp',
        price: 14990
    },
    {
        title: 'Cereal Estrellitas 470g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_612523-MLC47354709226_092021-V.webp',
        price: 2770
    },
    {
        title: 'Pack Barra Cereal Costa Cereal Bar Frutos Rojos 8 Un De 21 G',
        img: 'https://http2.mlstatic.com/D_NQ_NP_925281-MLC48654637452_122021-V.webp',
        price: 1730
    },
    {
        title: 'Carozzi Pasta Espiral 49 400 Gr',
        img: 'https://http2.mlstatic.com/D_NQ_NP_855200-MLC49533662174_032022-V.webp',
        price: 980
    },
    {
        title: 'Carozzi Pasta Pack 3 Spaghetti 5 + Salsa',
        img: 'https://http2.mlstatic.com/D_NQ_NP_996884-MLC49303524585_032022-V.webp',
        price: 2980
    },
    {
        title: 'Azúcar Granulada Nuestra Cocina Bolsa 1.6 Kg',
        img: 'https://http2.mlstatic.com/D_NQ_NP_953174-MLC48654655435_122021-V.webp',
        price: 1690
    },
    {
        title: 'Azúcar Blanca Iansa Granulada 1 Kg',
        img: 'https://http2.mlstatic.com/D_NQ_NP_813003-MLC48654531367_122021-V.webp',
        price: 1390
    },
    {
        title: 'Tortas De Cuchuflí',
        img: 'https://http2.mlstatic.com/D_NQ_NP_816268-MLC50860720169_072022-V.webp',
        price: 9700
    },
    {
        title: 'Maruchan Instant Lunch Pollo 12 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_804247-MLC46247274822_062021-V.webp',
        price: 9990
    },
    {
        title: 'Leche de fórmula en polvo Nutricia Neocate LCP  en lata de 400g - 0  a  12 meses',
        img: 'https://http2.mlstatic.com/D_NQ_NP_714376-MLA47526882600_092021-V.webp',
        price: 6964
    },
    {
        title: 'Maruchan Ramen Carne 24 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_740643-MLC46965611143_082021-V.webp',
        price: 11990
    }
    ]
}

let pagina = 1

// Creamos las variables de todos los botones para ser usadas mas adelante
const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
const btnInicio = document.getElementById('btnInicio')
const btnHardCode = document.getElementById('btnHardCode')
const btnML = document.getElementById('btnML')

// Creamos los div's de todos los contenedores para poder agregarles/quitarles el hidden como sea necesario
const pagIni = document.getElementById('contenedorInicio')
const pagML = document.getElementById('contenedorML')
const pagHardCode = document.getElementById('contenedorHardCode')

// creamos una variable LIMIT con un valor X y una variable tipo contador C
let limit = 500
let c = 0

// Agregamos el evento tipo click al boton Next
btnNext.addEventListener('click', () => {
    // Verificamos si la pagina supera el limite de paginas que nos trae la appi
    if(pagina!=limit){
        // de no superarla sumamos en uno a la variable pagina y ejecutamos nuestro script que muestra los productos
        pagina += 1
        // tambien puede ser de la siguiente forma ↓↓↓
        //   pagina++
        cargarTienda()
    }else{
        // De no ser asi, mostramos una alerta diciendo que estamos en la ultima pagina
        alert('Estas en la ultima pagina.')
    }
    // Este codigo lo hacemos con contador 0 para que al sumar 1 al contador, no se vuelva a ejecutar
    // Guardamos el valor que tiene limit en nuestra variable, este valor lo guardamos desde la appi en la linea 
    if(c===0){
        c++
        limit = document.getElementById('limit').value
    }
})

// Agregamos el evento tipo click al boton Prev
btnPrev.addEventListener('click', () => {
    //verificamos que la pagina sea menor a 2, tambien puede ser = 1 o <= 1 
    if(pagina < 2){
        // De ser asi receteamos la variable a 1 (para evitar algun posible error de que la pagina termine en 0 o negativo por algun bug, 
        // aunque nunca deberia ocurrir)
        pagina = 1
        alert('Estas en la primera pagina')
    }else{
        // restamos a la variable pagina 1
        // pagina -= 1
        pagina--
        // tambien puede ser de la siguiente forma ↓↓↓
        //   pagina--
        cargarTienda()
    }
})

// Agregamos el evento click al boton inicio, donde hacemos hidden los otros dos contenedores, y revelamos el de inicio
// copn classList.add agregamos una clase y con classList.remove la quitamos
// la class 'hidden' la colocamos en el codigo de styles.css, como un display: none, por lo que al agregar esta clase, ocultamos de la vista el div

btnInicio.addEventListener('click', () => {
    pagML.classList.add('hidden')
    pagHardCode.classList.add('hidden')
    pagIni.classList.remove('hidden')
})

// en estos dos botones (este y el de abajo) aplica lo mismo que en el de inicio con la diferencia de que llamamos la función que nos trae los datos

btnML.addEventListener('click', () => {
    pagIni.classList.add('hidden')
    pagHardCode.classList.add('hidden')
    pagML.classList.remove('hidden')
    cargarTienda()
})

btnHardCode.addEventListener('click', async () => {
    pagML.classList.add('hidden')
    pagIni.classList.add('hidden')
    pagHardCode.classList.remove('hidden')
    try {
        // hacemos un llamado a los datos con un delay de 1 segundo
        const datos = await delay(1000, json.items)
        // renderizamos los items del json, la funcion se encuentra en appHardCode.js
        renderItems(datos)
    } catch (error) {
        // en caso de error, mostramos un mensaje en pantalla y mandamos el error a la consola
        document.getElementById('contenedorHC').innerHTML = "Error al cargar los datos"
        console.log(error)
    }
})

// ejecutamos la función que nos trae los datos de la tienda desde la appi
const cargarTienda = async () => {
    try{
        // Agregamos la palabra carros, para que nos busque dentro de la api los datos que tengan relación con esta palabra
        // y agregamos ?paging=${pagina} para poder mediante la variable paginas saber en cual pagina de la api nos encontramos
        let url = `https://api.mercadolibre.com/sites/MLC/search?q=carros?paging=${pagina}`
        const resp = await fetch(url)
        if(resp.status === 200){
            //en caso de que el status de la respuesta sea correcto procedemos a traer los resultados
            const datos = await resp.json()
            console.log(datos)

            let tiendas = ''
            // recorremos el arreglo datos.results con el metodo forEach el cual recorre uno a uno todos los resultados
            datos.results.forEach( tienda => {
                // agregamos a la variable tiendas los datos de los productos para luego mostrarlos en pantalla mediante un innerHTML
                tiendas += `<div class='productos'>
                <img class='poster' src='${tienda.thumbnail}'>
                <h3 class='titulo'>${tienda.title}</h3>
                <p class='price'>$${tienda.price}<p>
                </div>`
            })
            // agregamos el valor al input limit, el total de paginas del array
            if(c===0){
                document.getElementById('limit').value = datos.paging.total
            }
            document.getElementById('contenedor').innerHTML = tiendas
        }else if(resp.status === 401){
            // en caso de que el status de la respuesta nos de el error 401, mostramos este mensaje
            console.log('You dont have access to this resource')
        }else if(resp.status === 404){
            // en caso de que el status de la respuesta nos de el error 404 (no se encontro), mostramos este mensaje
            console.log('The movie you search does not found')
        }else{
            // en caso de que el status de la respuesta nos de cualquier otro error, mostramos este mensaje.
            console.log('ohh, something is wrong...')
        }
    }catch (err){
        // en caso de que la api el try se rompa por algun motivo, mostramos el error por consola al usuario
        console.log('error => ' , err)
    }
}

