async function addToTable(person) {
    // let person = await getPerson('https://randomuser.me/api/')
    console.log("person: ", person);

    let rowContainer = document.createElement('tr');
    document.getElementById('peopleTableBody').appendChild(rowContainer)

    let personRow = document.createElement('td');
    personRow.innerHTML = `<img src=${person.picture.thumbnail} width=auto height="80" />`;
    rowContainer.appendChild(personRow);
    
    personRow = document.createElement('td');
    personRow.innerHTML = `<a href="mailto:${person.email}">${person.name.first} ${person.name.last}</a>`;
    rowContainer.appendChild(personRow);

    personRow = document.createElement('td');
    personRow.textContent = `${person.phone}`;
    rowContainer.appendChild(personRow);

    personRow = document.createElement('td');
    personRow.textContent = `${person.location.city}`;
    rowContainer.appendChild(personRow);
}

async function getPerson() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const {results} = await response.json();
        addToTable(results[0]);
        } catch (error) {
            console.error(error)
        } 
}

async function serverGetPerson() {
    const response = await fetch(`/random-person`);
    const {results} = await response.json();
    addToTable(results[0])
}

window.onload = function() {
    document.getElementById('browserRequest').addEventListener("click", getPerson)
    document.getElementById('expressRequest').addEventListener("click", serverGetPerson)    
}
