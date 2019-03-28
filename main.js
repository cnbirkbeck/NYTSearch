function clearForm() {
    $('#searchTerm').val("");
    $('#numberofRecords').val("");
    $('#startYear').val("");
    $('#endYear').val("");

}
var response;

$('#searchbtn').on('click', function() {

    var searchTerm = $('#searchTerm').val();
    var numberOfRecords = $('#numberofRecords').val();
    var startYear = $('#startYear').val();
    var endYear = $('#endYear').val();
    response = querySearch(searchTerm, numberOfRecords, startYear, endYear);
});

function querySearch(searchTerm, numRecords, startYear, endYear) {

    var link;
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&begin_date=' + startYear + '&end_date=' + endYear + '&api-key=M8GKFxeUmc32YlzOgyRkpjvZRUddW6wB'
    var headline;
    var authors;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        for (let i = 0; i < numRecords; index++) {
            console.log(response);
            link = response.response.docs[i].web_url;
            headline = response.response.docs[i].headline.main;
            authors = response.response.docs[i].byline.original;
            console.log(response.response.docs[i].headline.main);
            console.log(response.response.docs[i].byline.original);
        }
    });
};