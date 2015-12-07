console.log("Guus")
$(print)

      
function print(){
  var names = ["alastair", "ben", "guillame", "guus", "kwakes","marika","ollie","sarah","sed","calum","marty","emily","pritpal"]
  for(var i=0;i<names.length;i++){
    $("#pictures").append("<li><img src='http://localhost:3000/" + names[i] + "'><div class='caption center-align'><h3>The Hassifier</h3><h5 class='light grey-text text-lighten-3'>Like you, but better.</h5></div></li>")
  }

}

$(document).ready(function(){
    $('.slider').slider({full_width: true});
  });

      