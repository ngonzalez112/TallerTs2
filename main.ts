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
        
        trElement.addEventListener('click', () => displaySeriesDetail(s));
        seriesTbody.appendChild(trElement);
    });
}

function calculateAverage(): void {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0); 
    const averageSeasons = totalSeasons / series.length; 

    const seasonsAverageDiv = document.getElementById("seasons-average")!; 
    seasonsAverageDiv.innerHTML = `<p><strong>Seasons Average: </strong>${averageSeasons.toFixed(2)}</p>`; 
}

function displaySeriesDetail(serie: Serie): void {
    const seriesDetail = document.getElementById("series-detail")!;
    const cardBody = seriesDetail.querySelector('.card-body')!;

    const existingImage = seriesDetail.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }

    const seriesImage = document.createElement('img');
    seriesImage.className = 'card-img-top'; 
    seriesImage.src = serie.foto;     
    seriesImage.alt = `Image of ${serie.name}`;

    seriesDetail.insertBefore(seriesImage, cardBody);

    const seriesName = document.getElementById("series-name")!;
    const seriesDescription = document.getElementById("series-description")!;
    const seriesLink = document.getElementById("series-link") as HTMLAnchorElement;

    seriesName.textContent = serie.name;
    seriesDescription.textContent = serie.descripcion;
    seriesLink.href = serie.url;
    seriesDetail.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    displaySeries(); 
    calculateAverage(); 
});

