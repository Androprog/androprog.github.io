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
  add_to_box(baslik_adi);
	baslik.innerHTML = baslik_adi;
  console.log(baslik_adi);
}

function add_to_box(category){
  var series = {"Savaş": [{"title": "Attack"}], "Aksiyon": [{"title": "Naruto"}]};
  var main = document.getElementByID("box");
  console.log(series)
  for (x in series[category]) {
    console.log(x);
    main.innerHTML += formatter(x["title"], "");
  }
}

