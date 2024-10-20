import { series } from './data.js';
function displaySeries() {
    var seriesTbody = document.getElementById('series-table').getElementsByTagName('tbody')[0];
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(s.id, "</th>\n                               <td>").concat(s.name, "</td>\n                               <td>").concat(s.channel, "</td>\n                               <td>").concat(s.seasons, "</td>");
        trElement.addEventListener('click', function () { return displaySeriesDetail(s); });
        seriesTbody.appendChild(trElement);
    });
}
function calculateAverage() {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    var seasonsAverageDiv = document.getElementById("seasons-average");
    seasonsAverageDiv.innerHTML = "<p><strong>Seasons Average: </strong>".concat(averageSeasons.toFixed(2), "</p>");
}
function displaySeriesDetail(serie) {
    var seriesDetail = document.getElementById("series-detail");
    var cardBody = seriesDetail.querySelector('.card-body');
    // Si existe una imagen previa, elimínala
    var existingImage = seriesDetail.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }
    var seriesImage = document.createElement('img');
    seriesImage.className = 'card-img-top';
    seriesImage.src = serie.foto;
    seriesImage.alt = "Image of ".concat(serie.name);
    seriesDetail.insertBefore(seriesImage, cardBody);
    var seriesName = document.getElementById("series-name");
    var seriesDescription = document.getElementById("series-description");
    var seriesLink = document.getElementById("series-link");
    seriesName.textContent = serie.name;
    seriesDescription.textContent = serie.descripcion;
    seriesLink.href = serie.url;
    seriesDetail.style.display = "block";
}
document.addEventListener('DOMContentLoaded', function () {
    displaySeries();
    calculateAverage();
});
