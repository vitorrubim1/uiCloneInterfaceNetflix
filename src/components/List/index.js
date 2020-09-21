import * as React from "react";

import "./style.css";

import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export default function List({ title, items, key }) {
  const [scrollX, setScrollX] = React.useState(-345); //estado q controla o carrosel

  function handleLeftArrow() {
    let xValue = scrollX + Math.round(window.innerWidth / 2); //Math.round(window.innerWidth / 2): pego a largura da tela e divido por 2

    if (xValue > 0) {
      xValue = 0;
    }

    setScrollX(xValue);
  }

  function handleRightArrow() {
    let xValue = scrollX - Math.round(window.innerWidth / 2);
    let maximumListWidth = items.results.length * 190; //quantidade de itens * a largura das imagens

    if (window.innerWidth - maximumListWidth > xValue) {
      //se a largura da tela - a largura da lista for maior q o tanto q vai ser scrollado eu digo q o valor do scroll é o tamanho da tela - o tamanho da lista - o padding
      xValue = window.innerWidth - maximumListWidth - 60; //60 de padding
    }

    setScrollX(xValue);
  }

  return (
    <React.Fragment>
      <div value={key} className="movieRow">
        <h2>{title}</h2>

        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBefore style={{ fontSize: 60 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNext style={{ fontSize: 60 }} />
        </div>

        <div className="movieRow--listArea">
          <div
            className="movieRow--list"
            style={{
              marginLeft: scrollX, //basicamente o estado controla a margin do carrosel
              width: items.results.length * 190, //a quantidade de item vezes a largura do movieRow--item
            }}
          >
            {items.results.length > 0 &&
              items.results.map((
                item,
                key //tems: os filmes em si. loop dentro do loop pra mostrar os filmes
              ) => (
                <div key={key} className="movieRow--item">
                  {" "}
                  {/* cada item tem 190px */}
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
