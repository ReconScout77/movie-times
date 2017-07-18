function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

var basePrice = 13;

function priceModifier(movie, time, age, price) {
  if (movie == "new") {
    price += 2;
  }
  if (parseInt(time) < 15) {
    price -= 3;
  }
  if (age != "2") {
    price -= 2;
  }
  return "$" + price;
}

function clearFields() {
  $("#movies").val("");
  $("#time").val("");
  $("#age").val("");
}


$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var movieInput = $("#movies").val();
    var timeInput = $("#time").val();
    var ageInput = $("#age").val();

    var newTicket = new Ticket(movieInput, timeInput, ageInput);

    $("#results").text(priceModifier(movieInput, timeInput, ageInput, basePrice));

    $(".well").show();

    clearFields();
  });
});
