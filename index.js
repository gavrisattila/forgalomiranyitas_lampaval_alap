window.addEventListener("load", init);
function $(elem) {
return document.querySelectorAll(elem);
}

var allapot = false;
function init() {
var autoelem = $(".auto")[0];
var lampa = $(".lampa")[0];
var piros = $(".piros")[0];
var sarga = document.querySelector(".sarga");
var zold = document.querySelector(".zold");
sarga.style.opacity = "20%";
zold.style.opacity = "20%";
setInterval(() => {
if(!allapot){
sarga.style.opacity = "100%";
}
}, 1000);
setInterval(() => {
if(allapot){
piros.style.opacity = "100%";
zold.style.opacity = "20%";
}else{
piros.style.opacity = "20%";
sarga.style.opacity = "20%";
zold.style.opacity = "100%";
autoelem.classList.add("balroljobbra")
}
allapot = !allapot
}, 2000);
}