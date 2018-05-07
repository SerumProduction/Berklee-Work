let songs = [
  {
    title: "Getting Away with It (All Messed Up)",
    artist: "James",
    album: "Pleased to Meet You",
    year: 2001,
    art: "https://upload.wikimedia.org/wikipedia/en/2/2a/JamesPleasedToMeetYou.jpg"
  },
  {
    title: "Renaissance Affair",
    artist: "Hooverphonic",
    album: "Blue Wonder Power Milk",
    year: 1998,
    art: "https://upload.wikimedia.org/wikipedia/en/1/17/Hooverphonic-Blue_Wonder_Power_Milk.jpg"
  },
  {
    title: "White Nights",
    artist: "Oh Land",
    album: "Oh Land",
    year: 2011,
    art: "https://upload.wikimedia.org/wikipedia/en/6/68/Oh_Land_%28album%29.png"
  }
]

songs.forEach(function(songs){
  var ul = document.querySelector('#dynamic-list');
  var listItem = songs;
  var li = document.createElement("li");
  li.setAttribute('id', listItem);
  li.appendChild(document.createTextNode(listItem));
  ul.appendChild(li);
});

let data = [1,2,3,4,5];
data.forEach(function(data) {
  //console.log(data);
});
