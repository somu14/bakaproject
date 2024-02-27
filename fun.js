let canvas = document.getElementsByTagName("body");

const colors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800000", // Maroon
    "#008000", // Olive
    "#000080", // Navy
    "#808000", // Olive Green
    "#800080", // Purple
    "#008080", // Teal
    "#A52A2A", // Brown
    "#FFA07A", // Light Salmon
    "#FFD700", // Gold
    "#F08080", // Light Coral
    "#90EE90", // Light Green
    "#87CEEB", // Sky Blue
    "#9370DB", // Medium Purple
    "#D8BFD8", // Thistle
    "#FF6347", // Tomato
    "#00FF7F", // Spring Green
    "#4682B4", // Steel Blue
    "#F4A460", // Sandy Brown
    "#2E8B57", // Sea Green
    "#6A5ACD", // Slate Blue
    "#FF4500", // Orange Red
    "#32CD32", // Lime Green
    "#1E90FF", // Dodger Blue
    "#DAA520", // Goldenrod
    "#7B68EE", // Medium Slate Blue
    "#FF69B4", // Hot Pink
    "#8A2BE2", // Blue Violet
    "#FFA500", // Orange
    "#7FFF00", // Chartreuse
    "#6495ED", // Cornflower Blue
    "#BDB76B", // Dark Khaki
    "#8B008B", // Dark Magenta
    "#20B2AA", // Light Sea Green
    "#B8860B", // Dark Goldenrod
    "#DC143C", // Crimson
    "#32CD32", // Lime Green
    "#9932CC", // Dark Orchid
    "#FF1493", // Deep Pink
    "#4B0082", // Indigo
    "#CD5C5C", // Indian Red
    "#00CED1", // Dark Turquoise
    "#6B8E23", // Olive Drab
    "#9400D3", // Dark Violet
];

function getid() {
  let a = Math.floor(Math.random() * 2);
  return a;
}
function generateball() {
  let div = document.createElement("div");
 
  div.setAttribute("class","ball");

  div.style.backgroundColor=colors[Math.floor(Math.random()*50)];

  const positionX = Math.floor(Math.random() * (window.innerWidth));
  const positionY = Math.floor(Math.random() * (window.innerHeight));
  div.style.left = positionX + "px";
  div.style.top = positionY + "px";
  document.body.appendChild(div);
}
//ball fall

function ballfall()
{
    let balls=document.getElementsByClassName("ball")
    for(let ball of balls)
    {
        ball.style.top= 700+"px";
    }
}

setInterval(() => {
  generateball();
}, 200);
setInterval(()=>{
    ballfall();
},10000)

