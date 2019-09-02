// function showPicture(){
//   // use jQuery ($ is shorthand) to find the div on the page and then change the html
//   // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
//   $("#image").append('<img class="rounded-circle" src="images/cat.gif"/>');
//   $("p").html("High five! You're building your first web app!. You are fantastic");

//   // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
// }

// $(document).ready(function(){
//   getWeather();
// })

function getWeather(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&APPID="+apiKey;
  var url2 = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&APPID=ee69d4541d1a33ca8a856a921e533a79";

  $(".city").text("");
  $(".temp").text("");
  $(".hum").text("");
  $(".error_message").text("");


  $.ajax(url2,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
    $(".hum").text(data.main.humidity);
    console.log(data);
  }, error: function(error){
    $(".error_message").text("An Error Happened, fool!!!!");
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}