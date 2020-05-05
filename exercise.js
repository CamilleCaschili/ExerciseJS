var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://github.com/CamilleCaschili/ExerciseJS/blob/master/dataset-example.json');
dataRequest.onload = function() {
    var allProducts = JSON.parse(dataRequest.responseText);
    console.log(allProducts[0])
};
dataRequest.send();