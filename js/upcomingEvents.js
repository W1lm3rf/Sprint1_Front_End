import * as funcionesGenerales from "../modules/functions.js";
const enlaceData = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(enlaceData)
    .then(response => response.json())
    .then(data => {

        let proximosEventos = []

        for (let index = 0; index < data.events.length; index++) {
            if (data.currentDate < data.events[index].date) {
                proximosEventos.push(data.events[index])
            }

            let checks = document.getElementById("contenedorChecks")
            let categorias = Array.from(new Set(proximosEventos.map(event => event.category)))
            let categoryValue = categorias.map(category => ({ category }))

            funcionesGenerales.cardsHtml(proximosEventos)
            funcionesGenerales.crearCheck(categoryValue)
            funcionesGenerales.cardsHtml(proximosEventos)

            let searchbar = document.getElementById("barraBuscar")
            searchbar.addEventListener("input", () => funcionesGenerales.filterCards(proximosEventos))

            checks.addEventListener("change", () => funcionesGenerales.filterCards(proximosEventos))

        }
    })