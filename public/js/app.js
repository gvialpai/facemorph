$(print)

function print(){
  var names = ["alastair", "ben", "guillaume", "guus", "kwakes","marika","ollie","sarah","sed","calum","marty","emily","pritpal","jake","barney","alex","rob","emilyi"]
  for(var i=0;i<names.length;i++){
    $("#pictures").append("<div class='picture col s2' id=" + i + "><li><a href='http://hassifier.herokuapp.com/" + names[i] + "'><img src='http://hassifier.herokuapp.com/" + 
      names[i] + 
      "'></a></li></div>")
  }
  addHovers();
}


function addHovers() {

  $('h1').click(function() {
    $('.picture').css("opacity", "1")
  })

  $('.picture').hover(function() {
    $('.picture').css("opacity", "0.02");
    $(this).delay(1000).css("opacity", "1");
  })
}