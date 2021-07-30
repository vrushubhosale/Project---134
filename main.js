objectDetector= "";

img = "";
status = "";
objects = [];

function preload(){
img = loadImage('dog_cat.jpg');
video = createCapture(VIDEO);
video.size(380, 380)
video.hide();
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modeLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modeLoaded(){
console.log("Model Loaded");
status = true
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
objects = results
}

function draw(){
image(video, 0, 0, 380, 380);


if (status != ""){
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for(i = 0; i < objects.length; i++){
document.getElementById("status").innerHTML = "Status = Object Detected";
fill(r, g, b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+ "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(r, g, b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}}}