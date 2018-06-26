//$(document).ready(function (){
});
$.ajax({
  url:''
  dataType: 'JSON',
  data: {
    api_key: ''
  }
  success: resp => {
       url = resp.data[""].embed_url
       $('#details').html(`<iframe src=${url}>`)
})
function searchRepositories(searchTerm) {
  
}