//$(document).ready(function (){
});
$.ajax({
  url:'jquery-3.1.0.min.js'
  dataType: '',
  data: {
    api_key: ''
  }
  success: resp => {
       url = resp.data["0"].embed_url
       $('#lonelyDiv').html(`<iframe src=${url}>`)
})
function searchRepositories(searchTerm) {
  
}