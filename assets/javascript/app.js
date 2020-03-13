//create the array of games
var topics = ["League of Legends", "Overwatch", "Apex Legends", "Fortnite", "Minecraft", "TFT"];

//create root div to hold app components
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

console.log(app)

$( document ).ready(function() {

  //loop through topics array and assign a button to the container
  topics.forEach(topic =>{
    const my_topics = document.createElement('button');
    my_topics.setAttribute('type', 'button');
    my_topics.setAttribute('class', 'btn btn-info');
    my_topics.setAttribute('data-game', topic)
    my_topics.textContent = topic;

    container.appendChild(my_topics);

  })

const gifs = document.createElement('div');
gifs.setAttribute('id', 'list-gifs');

container.appendChild(gifs);
  //when user clicks on button show 10 static gif images
  $("button").on("click", function(){
    $('#list-gifs').empty();
    var videoGame = $(this).attr("data-game");
    var qURL = "http://api.giphy.com/v1/gifs/search?q=" + videoGame + "&api_key=kz3EgsMqT33hUlh4lISAf8x4BdsetIqh&limit=10"
    // var test = $.get("http://api.giphy.com/v1/gifs/search?q=fortnite&api_key=kz3EgsMqT33hUlh4lISAf8x4BdsetIqh&limit=10")
    // test.done(function(data) { console.log("success got data", data); });

    $.ajax({
      url: qURL,
      method: "GET"
    }).then(function(response){

      var results = response.data;

      for(var i = 0; i < results.length; i++) {
        // var gifDiv = $("<div>");
        var rating = results[i].rating;

        var h4 = $("<h4>").text("Gif Rating: " + rating);

        var gameImg = $("<img>");

        gameImg.attr("src",
      results[i].images.fixed_height.url);
        //gifDiv.append(h4);
        h4.append(gameImg);

        $("#list-gifs").prepend(h4);
        console.log("my name jeff")
      }
    })
  })
  // $(".btn").click(function(){
  //   alert("you clicked " + this.id + " me")
  // })

});
