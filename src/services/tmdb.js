const API_KEY = "4778c5d92a3614fce273d5704af800e0"; // KEY GERADA PELO TMDB
const API_BASE = "https://api.themoviedb.org/3"; // URL Q PRECEDE OS FILMES/SERIES 

/*
  o que buscarei da API
  
  - originais da netflix
  - recomendados (trending)
  - em alta (top rated)
  - ação 
  - comédia 
  - terror 
  - romance 
  - documentários 
*/

//função auxiliar
const basicFetch = async (endpoint) => { //endpoint será a rota para cada genero
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json(); //resultado do fetch acima
  return json;
}

export default {
  getHomeList: async () => { //função q listará todos as categorias
    return [ //retornará um array com objeto de cada categoria
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        //para cada um dos items, chamo a função auxiliar e passo a rota do "slug" especifico, tenho acesso as informações atraves da documetação 
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) 
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}