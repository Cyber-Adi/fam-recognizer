Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_Snap(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="capimg" src="'+ data_uri+'"/>';
        });
    }
    console.log('ml5 version:', ml5.version);
    
    classifier=ml5.imageClassifier('', modelLoaded);
    function modelLoaded(){
        console.log('Model Loaded!');
    }
    function check(){
        img=document.getElementById('capimg');
        classifier.classify(img, gotResult);
    }
    function gotResult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
    }