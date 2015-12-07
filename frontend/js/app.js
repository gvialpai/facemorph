$(init);

function init(){

  var pathname = window.location.pathname;

  console.log(pathname)
getUrl(pathname+"guus")
function getUrl(name){
$.get("http://localhost:3000/facemorphs"+name, function(data){
  // var url = data.url
  // console.log(data.url)
  // return data.url
  appendImage(data.url)
})
// }

function appendImage(url){
  // var url = data.url
  console.log(url)
  $( ".main" ).append( "<img src='"+url+"'>" );
}
}
}

