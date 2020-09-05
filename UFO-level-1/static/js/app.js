// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
button.on("click", filterTable);

function filterTable() {
    d3.event.preventDefault();
    var inputValue = d3.select("#datetime").property("value");

    if(inputValue === '') {
        defaultLoad();
    }
    else {
        var dataResult = tableData.filter(ufo => ufo.datetime === inputValue);
        tbody.html("");

        dataResult.forEach((ufoSighted) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighted).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }
};
