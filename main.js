mustache_x= 0;
mustache_y= 0;

function preload(){
    mustache= loadImage('https://i.postimg.cc/667Gn86t/mustache.jpg');
}
function setup(){
   canvas= createCanvas(350, 300);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(350, 300);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        mustache_x= results[0].pose.nose.x;
        mustache_y= results[0].pose.nose.y;
        console.log("mustache x="+mustache_x);
        console.log("mustache y="+mustache_y);
    }    
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    image(video, 0, 0, 350, 300);
    
    stroke(255, 200, 0);
    image(mustache, mustache_x, mustache_y, 60, 60);
}
function take_snapshot(){
    save('my_filtered-image.png');
}