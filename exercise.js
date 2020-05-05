var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'dataset-example.json');
dataRequest.onload = function() {
    var allProducts = JSON.parse(dataRequest.responseText);
    console.log(allProducts[0])
};
dataRequest.send();