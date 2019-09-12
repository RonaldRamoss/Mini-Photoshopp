$(document).on("click","#env",function(){

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('image');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

$(document).on("change","#cont",function(){
var imagem = window.document.getElementById('image');
var con = window.document.getElementById('cont');
var contraste = Number(con.value);
alert(contraste);
imagem.style.filter = `contrast(${contraste}%)`; 

});

