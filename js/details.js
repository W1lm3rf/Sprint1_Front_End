const enlaceData = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(enlaceData)
  .then(response => response.json())
  .then(data => {
    let UrlParams = new URLSearchParams(window.location.search)

    let details = UrlParams.get("id")

    let evento = data.events.find(evento => evento._id === parseInt(details))

    let divContainer = document.getElementById("ContenedorCardDetails")

    let eventDetail = `

      <div class="card mb-3" style="max-width: 740px; background-color: gray; padding: 20px;">
          <div class="row g-0" style="height: 440px; overflow: hidden">
              <div class="col-md-4">
                  <img src="${evento.image}" alt="${evento.name}" id="imgDetails">
              </div>
              <div class="col-md-8" style="padding: 20px;">
                  <div class="card-body" style="background-color: white; height: 100%;">
                      <h5 class="card-title">${evento.name}</h5>
                      <p class="card-text">${evento.description}</p>
                      <p>Category: ${evento.category}</p>
                      <p>Place: ${evento.place}</p>
                      <p>Date: ${evento.date}</p>
                      <p>Price: $${evento.price}</p>
                  </div>
              </div>
          </div>
      </div>`
    divContainer.innerHTML = eventDetail
  })