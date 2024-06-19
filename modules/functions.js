export function crearCard(cardsContainer, card) {
  let generateCard = document.createElement("div")
  generateCard.classList.add("cards", "pt-2", "my-2", "mx-2", "text-white")

  generateCard.innerHTML =
    
    `
            <div class="card me-3 my-1 h-100 cards-i" style="width: 18rem">
                <img src="${card.image}" class="card-img-top" alt="${card.name}" style="height: 20vh; object-fit: cover;"/>
                <div class="card-body text-center d-flex flex-column justify-content-around">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">
                        ${card.description}
                    </p>


                    <div class="d-flex justify-content-around align-items-baseline">
                        <p>US ${card.price} USD</p>
                        <a href="details.html?id=${card._id}" class="btn go-details">Details</a>
                    </div>
                </div>
            </div>
            `

  
  cardsContainer.appendChild(generateCard)
}

export function cardsHtml(arrayData) {
  let cardsContainer = document.getElementById("contenedorCards")
  let sinResultados = document.getElementById("noEncontrado")
  cardsContainer.innerHTML = ""

  if (arrayData.length === 0) {
    sinResultados.style.display = "block"
  } else {
    arrayData.forEach(event => crearCard(cardsContainer, event))
    sinResultados.style.display = "none"
  }

}



export function crearCheck(arrayData) {
  let checkDiv = document.getElementById("contenedorChecks")

  checkDiv.innerHTML = ""
  arrayData.forEach(category => {
    let newCheck = document.createElement("div")
    newCheck.innerHTML = `
        <input class="form-check-input" type="checkbox"  value="${category.category.toLowerCase()}">
        <label class="form-check-label" >${category.category}</label>`
    newCheck.classList.add("form-check", "form-check-inline");
    document.getElementById("contenedorChecks").appendChild(newCheck)
    
  })
}



export function filtrarCards(data, divContainer) {

  let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(input => input.value.toLowerCase())
  let searchText = document.getElementById("barraBuscar").value.toLowerCase()

  let searchFilter = data.filter(event => {
    let checkFilter = checked.length === 0 || checked.includes(event.category.toLowerCase());
    let textFilter = searchText === '' || event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText)
    return checkFilter && textFilter
  })

  cardsHtml(searchFilter)
}


