import * as React from "react";

import "./style.css";

export default ({ item }) => {
  const options = { year: "numeric" };
  const getDate = new Date(item.first_air_date);
  const date = getDate.toLocaleDateString("pt-BR", { ...options });

  let genres = [];

  for (let index in item.genres) {
    genres.push(item.genres[index].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover", //para ocupar tudo
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>

          <div className="featured--info">
            <div className="featured--points">{item.vote_average} Pontos</div>
            <div className="featured--year">{date}</div>
            <div className="featured--seasons">
              {item.number_of_seasons}
              {item.number_of_seasons > 1 ? " Temporadas" : " Temporada"}
            </div>
          </div>

          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchButton"> ► Assistir </a>
            <a href={`/list/add/${item.id}`} className="featured--myListButton"> + Minha Lista </a>
          </div>
          <div className="featured-genres">
            <strong> Genêros: </strong> {genres.join(", ")}{" "} {/*separo cada genero por virgula e espaço*/}
          </div>
        </div>
      </div>
    </section>
  );
};
