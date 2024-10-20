import { series } from './data.js';
function displaySeries() {
    var seriesTbody = document.getElementById('series-table').getElementsByTagName('tbody')[0];
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(s.id, "</th>\n                               <td>").concat(s.name, "</td>\n                               <td>").concat(s.channel, "</td>\n                               <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calculateAverage() {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    var seasonsAverageDiv = document.getElementById("seasons-average");
    seasonsAverageDiv.innerHTML = "<p><strong>Seasons Average: </strong>".concat(averageSeasons.toFixed(2), "</p>");
}
document.addEventListener('DOMContentLoaded', function () {
    displaySeries();
    calculateAverage();
});
