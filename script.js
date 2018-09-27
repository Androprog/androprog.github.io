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
  var series = {"Savaş": [{"title": "Attack", "desc": "asdasdasd"}, {"title": "XFCE", "desc": "asdasdasd"}], "Aksiyon": [{"title": "Naruto", "desc": "asdasdasd"}, {"title": "Narutonun Çocuğu", "desc": "asdasdasd"}]};
  var main = document.getElementById("box");
  for (x in series[category]) {
    main.innerHTML += formatter(series[category][x]["title"], series[category][x]["desc"]);
  }
}

