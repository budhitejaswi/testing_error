img = "";
status = "";

function preload(){
    img = loadImage("image.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
    fill("#f70c00");

    text("Dog",248,80);
    noFill();
    stroke("#f70c00");
    rect(248,80,270,290);
    
    fill('#f70c00')
    text("Flower",170,50);
    noFill();
    stroke("#f70c00");
    rect(170,50,50,50)
}

function modelLoaded() { 
    console.log(" Model Loaded! :)");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
}