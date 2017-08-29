--- 
layout: default 
title: Actualités

images:
  - image_path: /images/cakes/apple-pie.jpg
    title: Apple Pie
  - image_path: /images/cakes/birthday-cake.jpg
    title: Birthday Cake
  - image_path: /images/cakes/black-forest.jpg
    title: Black Forest
  - image_path: /images/cakes/brownie.jpg
    title: Brownie
  - image_path: /images/cakes/cheese-cake.jpg
    title: Cheese Cake
  - image_path: /images/cakes/chocolate-cake.jpg
    title: Chocolate Cake
  - image_path: /images/cakes/fruit-cake.jpg
    title: Fruit Cake
  - image_path: /images/cakes/lamington.jpg
    title: Lamington
  - image_path: /images/cakes/lemon-cake.jpg
    title: Lemon Cake

articles:
  - url: 
        http://www.anousparis.fr/city-guide/restos/galia
    title: 
        'Galia: cuisine fusion'
    author: 
        Philippe Toinard / anousparis.fr
    date: 
        27/10/2015
    photo: 
        ./assets/images/news/1.jpg
    text: 
        Dans la famille Godigna au Venezuela, il est de tradition d’évoluer dans le monde de la médecine. Maxim aurait du, aurait pu mais il n’a pas voulu.
  
  - url: 
        http://www.lesrestos.com/un-peu-beaucoup/article-restaurant-Galia_-_75014/1235
    title: 
        Le restaurant GALIA du chef Maxim Godigna
    author: 
        Alain Fusion / lesrestos.com
    date: 
        27/10/2015
    photo: 
        ./assets/images/news/2.jpg
    text: 
        Le restaurant GALIA a été ouvert début septembre 2015 par le chef Maxim Godigna qui a travaillé avec Jean-François Rouquette au Park Hyatt, au "Paris" de l'hôtel Lutetia avec Philippe Renard, au Buddha Bar Hôtel, et en qualité de second de Yoni Saada finaliste de Top Chef 2013.
  
  - url: 
        http://parisianavores.paris/restaurant-galia-bistronomique-rue-didot/
    title: 
        RESTAURANT GALIA, BISTRONOMIQUE, RUE DIDOT
    author: 
        Anaïs Lerma / parisianavores.paris
    date: 
        16/01/2016
    photo: 
        ./assets/images/news/3.jpg
    text: 
        Aux manettes de cette nouvelle adresse bistronomique, le chef Maxim Godigna, diplômé de Ferrandi et ancien second du top chef Yoni Saada. Une adresse bistronomique dans ce coin du 14ème, forcément, ça attire.
  
  - url: 
        http://www.restoaparis.com/fiche-restaurant-paris/galia.html
    title: 
        Maxim Godigna, un chef prometteur dans le 14ème
    author: 
        Redaction / restoaparis.com
    date: 
        16/01/2016
    photo: 
        ./assets/images/news/4.jpg
    text: 
        'Au bout de la rue Didot Paris 14ème, à une encablure de la station de tram du même nom, un joli couple de restaurateurs a choisi de faire son nid dans un bel endroit qu’ils ont d’ailleurs baptisé du nom de leur fille qui vient de naître : Galia.'

  - url: 
        http://fr.newtable.com/restaurant-restaurant-galia-3280.php
    title: 
        Une jolie table bistronomique de quartier
    author: 
        Mathilde / newtable.com
    date: 
        19/01/2016
    photo: 
        ./assets/images/news/5.jpg
    text: 
        Galia est le restaurant gastronomique du jeune chef Maxim Godigna. Après avoir tenu le restaurant du chef Yoni Saada Topchef 2013, Maxim décide d'ouvrir son propre restaurant. Une cuisine qui respecte les saisons les produits et la fraîcheur.

  - url: 
        http://lesfinesgueules.leparisien.fr/restaurant/galia/
    title: 
        Les Fines Gueules du Parisien Magazine
    author: 
        leparisien.fr
    date: 
        06/02/2016
    photo: 
        ./assets/images/news/6.jpg
    text: 
        Partout, des photos du chef, Maxim Godigna, et un écran qui diffuse ses rencontres avec d’autres cuisiniers. Un petit côté mégalomane, mais sinon, c’est sobre, avec une déco sud-américaine.
---





<div class="page-breadcrumb">
    <div class="container text-center">
        <h1>Actualités</h1>
    </div>
</div>
<div class="space-40"></div>
<div class="container">
    <div class="row masonry-grid">
        {% for article in page.articles %}
        <div class="col-sm-4 masonry-item">
            <div class="post">
                <div class="post-thumb">
                    <img src="{{article.photo}}" alt="" class="img-responsive" style="margin-left:auto;margin-right:auto">
                </div>
                <div class="post-meta">
                    <h3 class="">{{article.title}}</h3>
                    <ul class="list-inline">
                        <li><a href="#"><i class="ion-person"></i> {{article.author}}</a></li>
                        <li><a href="#"><i class="ion-calendar"></i>{{article.date}}</a></li>
                    </ul>
                </div>
                <div class="post-content">
                    <p>{{article.text}}</p>
                    <div class="text-right">
                        <a href="{{article.url}}" class="btn btn-primary btn-lg">Lire la suite....</a>
                    </div>
                </div>
            </div>
        </div>
        {% assign modulo = forloop.index | modulo: 3 %}
        {% if modulo == 0 %}
        <div class="clearfix"></div>
        {% endif %}
        {% endfor %}
    </div>
</div>
<div class="space-40"></div>
