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
    response = searchApi(searchTerm, numberOfRecords, startYear, endYear);
});