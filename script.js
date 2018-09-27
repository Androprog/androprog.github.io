function formatter(anime, desc){
  return `
	<article>
		<header>
			<h3>${anime}</h3>
		</header>
		<section>
			<p>${desc}</p>
		</section>
	</article>
`    
}

function baslik_degistir(baslik_adi){
	var baslik = document.getElementById("titler");
	baslik.innerHTML = baslik_adi;
  add_to_box(baslik_adi);
}

function add_to_box(category){
  var main = document.getElementById("diziler");
  main.innerHTML = "";
  var series = {"Savaş": [{"title": "Attack", "desc": "asdasdasd"}, {"title": "XFCE", "desc": "asdasdasd"}], "Aksiyon": [{"title": "Naruto", "desc": "asdasdasd"}, {"title": "Narutonun Çocuğu", "desc": "asdasdasd"}]};
  for (x in series[category]) {
    main.innerHTML += formatter(series[category][x]["title"], series[category][x]["desc"]);
  }
}

