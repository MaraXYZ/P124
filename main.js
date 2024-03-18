function preload()
{
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
        console.log("noseX" + results[0].pose.nose.x);
        console.log("noseY" + results[0].pose.nose.y);
    }
}

function draw()
{
}