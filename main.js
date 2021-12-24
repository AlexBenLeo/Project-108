
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7bocHCBMG/model.json',{
        probabilityThreshold:0.7    },modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
var lion=0;
var cow=0;
function gotResults(error,results) {
if (error) {
    console.error(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="Detected Voice Is Of"+results[0].label;
document.getElementById("result_count").innerHTML="Detected Dog-"+dog+"Detected Cat-"+cat+"Detected Lion-"+lion+"Detected Cow-"+cow;
img=document.getElementById("h43");
if (results[0].label == "Barking") {
    img.src="bark.gif";
    }
else if (result[0].label == "Meowing") {
    img.src="meow.gif";
}
    else if (results[0].label == "Roar")  {
        img.src="roar.gif";
    }
    else {
        img.src="moo.gif";
    }
}
} 

