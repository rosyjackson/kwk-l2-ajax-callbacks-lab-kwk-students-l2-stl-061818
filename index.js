//$(document).ready(function (){
//});
$.ajax({
  url:'https://developer.github.com/v3'
  dataType: 'JSON';
  data: {
    api_key: ' 8fd2e497e4442e9b4e59e72eb2c1dc7fd2e9dc49'
        q: '',
  }
  success: resp => {
       url = resp.data["0"].embed_url
       $('#details').html(`<iframe src=${url}>`)
})
function searchRepositories(searchTerm) 
  
