var topics = ["League of Legends", "Overwatch", "Apex Legends", "Fortnite", "Minecraft", "TFT"];
var gifs = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=kz3EgsMqT33hUlh4lISAf8x4BdsetIqh&limit=5");

gifs.done(function(data) {
  console.log("success got data", data);
});

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

console.log(app)

$( document ).ready(function() {

  //loop through topics array and assign a button to the container
  topics.forEach(topic =>{
    const my_topics = document.createElement('div');
    my_topics.setAttribute('type', 'button');
    my_topics.setAttribute('class', 'btn btn-info');
    my_topics.setAttribute('id', topic);
    my_topics.setAttribute('onClick', "topic_Click(this.id)")
    my_topics.textContent = topic;

    container.appendChild(my_topics);

  })

  //when user clicks on button show 10 static gif images
  function topic_Click(button){
    console.log(button);
  }
  // $(".btn").click(function(){
  //   alert("you clicked " + this.id + " me")
  // })

});
