function createGame(player1, hour, player2) {
   return `<li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de
        ${player2}">
    </li>
    `
}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}


document.querySelector('#app').innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="Logo da NLW">
        </header>

        <main id="cards">
            ${createCard("24/11", "Terça", 
            createGame("switzerland", "7:00", "cameroon") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
            )}

            ${createCard("28/11", "Quinta", createGame("cameroon", "7:00", "serbia") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")
            )}

            ${createCard("02/12", "Terça", 
            createGame("south-korea", "12:00", "portugal") + 
            createGame("serbia", "13:00", "switzerland") + 
            createGame("cameroon", "16:00", "brazil")
            )}
        </main>
`