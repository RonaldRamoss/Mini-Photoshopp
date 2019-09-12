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
imagem.style.filter = `contrast(${contraste}%)`; 

});

$(document).on("change","#sat",function(){
var imagem = window.document.getElementById('image');
var nm = window.document.getElementById('sat');
var satu = Number(nm.value);
imagem.style.filter = `saturate(${satu}%)`;

});

$(document).on("change","#gy",function(){
var vagy = window.document.getElementById('gy');
var vaec = Number(vagy.value);
var imagem = window.document.getElementById('image');
image.style.filter = `grayscale(${vaec}%)`;

});

