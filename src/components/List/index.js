import * as React from "react";

import "./style.css";

export default function List({title, items, key}) {
  return (
    <React.Fragment>
      <div key={key} className="movieRow">
        <h2>{title}</h2>
        <div className="movieRow--listArea">
          <div className="movieRow--list">
            {items.results.length > 0 &&
              items.results.map((
                item,
                key //tems: os filmes em si. loop dentro do loop pra mostrar os filmes
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
    </React.Fragment>
  );
}
