function id(id){
var x = document.getElementById(id);
return x;
};

function gizle(){
macera.style.display = "none";
aksiyon.style.display = "none";
};

var aksiyon = id("aksiyon");
var macera = id("macera");

function goster() {
var turler = document.getElementById("turler");
if (turler.value == "Aksiyon"){
aksiyon.style.display = "block";
}
else {
aksiyon.style.display = "none";
};
if(turler.value == "Macera"){
macera.style.display = "block";
};
else{
macera.style.display = "none";
};
};




function kapat() {
var turler = document.getElementById("turler");
aksiyon.style.display = "none";

};
