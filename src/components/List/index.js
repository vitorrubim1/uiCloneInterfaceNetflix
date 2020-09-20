import * as React from "react";
import Tmdb from "../../services/tmdb";

import "./style.css";

export default function List() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      //pegando as listas de filmes

      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <React.Fragment>
      {movieList.map((item, key) => (
        <div key={key} className="movieRow">
          <h2>{item.title}</h2>
          <div className="movieRow--listArea">
            <div className="movieRow--list">
              {item.items.results.length > 0 &&
                item.items.results.map((
                  item,
                  key //item: são as categorias/generos, items: os filmes em si. loop dentro do loop pra mostrar os filmes
                ) => (
                  <div key={key} className="movieRow--item">
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.original_title}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
