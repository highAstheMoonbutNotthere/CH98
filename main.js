
camera=document.getElementById("camera");
function save(){
    Webcam.attach(camera);
}
Webcam.set({

width:400,
height:500,
image_format:'png',
png_quality:90
});