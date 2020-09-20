import * as React from "react";

import Tmdb from "./services/tmdb";

import List from "./components/List";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    const loadAll = async () => {
      //pegando as listas de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme em destaque
      let originalsNetflix = list.filter((item) => item.slug === "originals"); //somente originais netflix

      let randomChosen = Math.floor(
        Math.random() * (originalsNetflix[0].items.results.length - 1)
      ); //escolhendo um número aleatorio do array de filmes originais
      let chosen = originalsNetflix[0].items.results[randomChosen]; //originalsNetflix[0].items = entro dentro dos items do array, results = os filmes e escolho o numero aleatorio [randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv"); //passando o id aleatorio pra pegar informações mais detalhadas

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <List key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
