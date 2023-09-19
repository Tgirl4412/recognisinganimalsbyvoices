function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SG2LJObYH/', modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I CAN HEAR -' +results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb(" +random_number_r + " , "+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb(" +random_number_r + " , "+random_number_g+","+random_number_r+")";
        

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');
   

        if (results[0].label=="bark")
        {
            img.src = 'cat';
            img1.src = 'dog';
           
        }
        else if (results[0].label=="meow")
        {
            img.src = 'cat';
        img1.src = 'dog';
        
        }
}
else {
    img.src = 'cat';
    img1.src = 'dog';

}
}
}