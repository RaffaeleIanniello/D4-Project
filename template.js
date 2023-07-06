const getEventData = function () {
    
    // sarà un'operazione di GET, quindi non ho bisogno di specificare il secondo parametro di fetch
    // perchè il method è quello predefinito, quest'API non necessità autenticazione, essendo un'operazione
    // di GET non dobbiamo passare nessun body etc.
    fetch("https://api.pexels.com/v1/search?query=batman", {
        headers: {
            Authorization: "tjlwNjpaCzwEeHZtNQuIvOPqKjW9mN9I1AFTSc9AmtD8LoriObkDVLyd"
        },
    })
      .then((res) => {
        console.log('Response della GET', res)
        if (res.ok) {
          return res.json()
        } 
      })
      .then((events) => {
        // entriamo qua se abbiamo ritornato res.json() dal .then() precedente
        console.log('EVENTS', events)
        // nascondo lo spinner
        const spinnerContainer = document.getElementById('spinner-container')
        spinnerContainer.classList.add('d-none')
        // abbiamo gli eventi salvati!
        // creiamo dinamicamente le card a partire dagli eventi recuperati:
        events.forEach((event) => {
          let newCol = document.createElement('div')
          newCol.classList.add('col', 'col-12', 'col-sm-6', 'col-md-3')
          newCol.innerHTML = `
            <div class="card">
                <img
                  src="..."
                  class="card-img-top"
                  alt="concert placeholder image"
                />
                <div class="card-body">
                  <h5 class="card-title">${event.name}</h5>
                  <p class="card-text">
                    ${event.description}
                  </p>
                  <p class="card-text">
                    ${event.time}
                  </p>
                  <p class="card-text fw-bold">
                    ${event.price}€
                  </p>
                  <a href="#" class="btn btn-primary">Scopri di più</a>
                </div>
              </div>
          `
          const eventsRow = document.getElementById('events-row')
          eventsRow.appendChild(newCol)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  getEventData()