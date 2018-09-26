function tur(turler){
var tur = document.getElementById(turler);
return tur;
}
var aksiyon = tur("aksiyon");
var macera = tur("macera");
function goster() {
var turler = document.getElementById("turler");
if (turler.value == "Aksiyon"){
aksiyon.style.display = "block";
}
else {
aksiyon.style.display = "none";
if (turler.value == "Macera"){
macera.style.display = "block";
};
};
};
function kapat() {
aksiyon.style.display = "none";
macera.style.display = "none";
aksiyon.style.display = "none";
aksiyon.style.display = "none";
};
