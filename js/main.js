import * as funcionesGenerales from "../modules/functions.js";
const enlaceData = "https://aulamindhub.github.io/amazing-api/events.json"


fetch(enlaceData)
  .then(response => response.json())
  .then(data => {
    let checks = document.getElementById("contenedorChecks")
    let categorias = Array.from(new Set(data.events.map(event => event.category)))
    let categoryValue = categorias.map(category => ({ category }))

    funcionesGenerales.cardsHtml(data.events)
    funcionesGenerales.crearCheck(categoryValue)
    funcionesGenerales.cardsHtml(data.events)

    let searchbar = document.getElementById("barraBuscar")
    searchbar.addEventListener("input", () => funcionesGenerales.filtrarCards(data.events))

    checks.addEventListener("change", () => funcionesGenerales.filtrarCards(data.events))

  })

