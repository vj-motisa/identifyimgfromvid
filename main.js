koka = "";
wala = "";
cola = [];

function setup() {
    canvas = createCanvas(550, 350);
    canvas.center();
}

function preload() {
    koka = createVideo("video.mp4");
    koka.hide();
}

function draw() {
    image(koka, 0, 0, 545, 345);

    if (wala != "") {
        objda.detect(koka, gotResult);
        
        for (i=0; i < cola.length; i++) {
            document.getElementById("momo").innerHTML = "Status: Objects Detected";
            document.getElementById("bleu").innerHTML = "No. of objects detected are: " + cola.length;

            fill("#c9bf65");
            kulu = floor(cola[i].confidence*100);
            text(cola[i].label + " " + kulu + "%", cola[i].x+15, cola[i].y+15);
            noFill();
            stroke("#792f7d");
            rect(cola[i].x, cola[i].y, cola[i].width, cola[i].height);
        }
    }
}

function yasui() {
    objda = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("momo").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("fuhrsl5hiot");
    wala = true;
    koka.loop();
    koka.speed(1);
    koka.volume(0);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
        cola = results;

    }
}