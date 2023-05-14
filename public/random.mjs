'use strict';

console.log("random js is executing");


async function addToTable() {
    let person = await getPerson('https://randomuser.me/api/')
    console.log("person: ", person);

    let rowContainer = document.createElement('tr');
    document.getElementById('peopleTableBody').appendChild(rowContainer)

    let personRow = document.createElement('td');
    personRow.innerHTML = `<img src=${person.picture.thumbnail} width=auto height="80" />`;
    rowContainer.appendChild(personRow);
    
    personRow = document.createElement('td');
    personRow.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;
    rowContainer.appendChild(personRow);

    personRow = document.createElement('td');
    personRow.textContent = `${person.phone}`;
    rowContainer.appendChild(personRow);

    personRow = document.createElement('td');
    personRow.textContent = `${person.location.city}`;
    rowContainer.appendChild(personRow);


}

async function getPerson(url) {
    try {
        const response = await fetch(url);
        const {results} = await response.json();
        console.log("results", results);
        return results[0];
        } catch (error) {
            console.error(error)
        } 
    }

    window.onload = function() {
        let frank = document.getElementById('browserRequest').addEventListener("click", addToTable)
    }
