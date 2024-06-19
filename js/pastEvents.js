import * as funcionesGenerales from "../modules/functions.js";
const enlaceData = "https://aulamindhub.github.io/amazing-api/events.json"


fetch(enlaceData)
  .then(response => response.json())
  .then(data => {

    let pastEvents = []

    for (let index = 0; index < data.events.length; index++) {
      if (data.currentDate > data.events[index].date) {
        pastEvents.push(data.events[index])
      }
    }

    let checks = document.getElementById("contenedorChecks")
    let categorias = Array.from(new Set(pastEvents.map(event => event.category)))
    let categoryValue = categorias.map(category => ({ category }))

    funcionesGenerales.cardsHtml(pastEvents)
    funcionesGenerales.crearCheck(categoryValue)
    funcionesGenerales.cardsHtml(pastEvents)

    let searchbar = document.getElementById("barraBuscar")
    searchbar.addEventListener("input", () => funcionesGenerales.filterCards(pastEvents))

    checks.addEventListener("change", () => funcionesGenerales.filterCards(pastEvents))

  })