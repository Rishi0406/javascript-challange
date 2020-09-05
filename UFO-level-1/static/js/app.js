// from data.js
var tableData = data;

//select table body and filter button
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

//create event handler
button.on("click", filterTable);

defaultLoad()   //show all sightings

//grabs input value to filter table data
function filterTable() {
    d3.event.preventDefault();   //prevent page from refreshing
    var inputValue = d3.select("#datetime").property("value"); //get date to filter
    var dataResult = tableData.filter(ufo => ufo.datetime === inputValue);  //apply filter
    tbody.html("");                             

//show sightings by filtered date
        dataResult.forEach((ufoSighted) => {
            var row = tbody.append("tr");
            Object.entries(ufoSighted).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    };

//function to show all sightings from table
function defaultLoad() {
    tableData.forEach((ufoSighted) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighted).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
