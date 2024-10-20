import { series } from './data.js'; 
import { Serie } from './serie.js'; 

function displaySeries(): void {
    const seriesTbody: HTMLElement = document.getElementById('series-table')!.getElementsByTagName('tbody')[0];

    series.forEach(s => {
        let trElement = document.createElement("tr");

        trElement.innerHTML = `<th scope="row">${s.id}</th>
                               <td>${s.name}</td>
                               <td>${s.channel}</td>
                               <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function calculateAverage(): void {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0); 
    const averageSeasons = totalSeasons / series.length; 

    const seasonsAverageDiv = document.getElementById("seasons-average")!; 
    seasonsAverageDiv.innerHTML = `<p><strong>Seasons Average: </strong>${averageSeasons.toFixed(2)}</p>`; 
}

document.addEventListener('DOMContentLoaded', () => {
    displaySeries(); 
    calculateAverage(); 
});

