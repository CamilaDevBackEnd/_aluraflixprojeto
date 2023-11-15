var listaFilmes = ['https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg', 'https://image.tmdb.org/t/p/original/mI1Ktgg7LuhwAhUgke4rHUxlDUr.jpg', 'https://www.themoviedb.org/t/p/original/nCzzQKGijVzfGFg42id7uDLOjY5.jpg', 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg', 'https://www.joaoalberto.com/wp-content/uploads/2022/08/22/homem_aranha_the_more_fun_stuff-26280289-1.jpg'];

var nomesFilmes = [
  'As Branquelas',
  'Os Vingadores-Ultimato',
  'John Wick-De Volta ao Jogo',
  'Matrix',
  'Homem-Aranha-Sem Volta Para Casa',
];

var listaSeries = ['http://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg', 'http://media.senscritique.com/media/000000009466/source_big/Dexter.jpg', 'https://www.themoviedb.org/t/p/original/upFjswDl7vIP7vGvly49x2PkUXc.jpg', 'https://images.justwatch.com/poster/302452272/s718/the-last-of-us.%7Bformat%7D', 'https://image.tmdb.org/t/p/original/oMFtDk8hgX9UM4dVEOJt8mcFmHC.jpg'];

var nomesSeries = [
  'Breaking Bad',
  'Dexter',
  'Black Mirror',
  'The Last Of Us',
  'Prison Break'
];

var listaAnimes = ['https://media.senscritique.com/media/000009446091/source_big/Rick_et_Morty.png', 'https://www.themoviedb.org/t/p/original/rgHWkZVyvxMBOSYgj585pIx6qAn.jpg', 'http://www.empireposter.de/bilder/bilder_XL/792235.jpg', 'https://picfiles.alphacoders.com/258/thumb-1920-258566.jpg'];

var nomesAnimes = [
  'Rick and Morty',
  'Naruto',
  'Death Note',
  'Dragon Ball Z'
];

function exibirListaComNomes(lista, nomes, categoria) {
  document.write("<h2>" + categoria + "</h2>");
  document.write("<div class='container'>");
  for (var i = 0; i < lista.length && i < nomes.length; i++) {
    document.write("<div class='item'>");
    document.write("<img src=" + lista[i] + ">");
    document.write("<p>" + nomes[i] + "</p>");
    document.write("</div>");
  }
  document.write("</div>");
}

exibirListaComNomes(listaFilmes, nomesFilmes, 'Filmes');
exibirListaComNomes(listaSeries, nomesSeries, 'Séries');
exibirListaComNomes(listaAnimes, nomesAnimes, 'Animes');

