let starter = document.getElementById("starter");

let heartArray = ["assets/Asset19.png","Asset20.png","Asset21.png","Asset22.png","Asset23.png","Asset24.png","Asset25.png","Asset19.png","Asset26.png","Asset27.png"];

//start a counter varaible 
let count = 0;

function animate() {
starter.src = heartArray[count];
//increment through array
count++;
//increase count through full length of array
if(heartArray.length == count)
{
count = 0;
}

}
setInterval(animate, 100)