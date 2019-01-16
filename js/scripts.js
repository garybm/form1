$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var locationInput = $("input#location").val();
    var ageInput= $("input#age").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var travelInput = $("input#travel").val();

    $(".name").text(nameInput);
    $(".location").text(locationInput);
    $(".age").text(ageInput);
    $("food").text(foodInput);
    $(".music").text(musicInput);
    $(".travel").text(travelInput);

    $("#story").show();

    event.preventDefault();
  });
});
