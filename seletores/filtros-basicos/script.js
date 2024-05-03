$(function () {
  $("li").css({
    color: "red",
    "list-style": "none",
    padding: "8px",
    "border-bottom": "1px solid white",
  });

  //Seleciona todos os elementos que não correspondem ao seletor fornecido
  $("li:not(.line)").css("color", "blue");

  //Seleciona elementos pares, indexados em zero
  $("li:first").css({
    color: "green",
  });

  //Seleciona elementos de acordo com a posição começando do 0 como num array, no exemplo abaixo vai selecionar o
  // 6º elemento li da página
  $("li:eq(5)").css({
    color: "yellow",
  });

  //Seleciona elementos pares
  $("li:even").css({
    background: "#ccc",
  });

  //Seleciona elementos ímpares
  $("li:odd").css({
    background: "#aaa",
  });

  //Selecione todos os elementos em um índice maior que o índice dentro do conjunto correspondente
  // Vai selecionar a partir do 6º elemento li em diante que está na página , lembrando que a contagem começa no 0
  $("li:gt(5)").css({
    background: "black",
  });

  //SSelecione todos os elementos em um índice menor que o índice dentro do conjunto correspondente
  // Vai selecionar a partir do 1º elemento li até chegar no 4º, lembrando que a contagem começa no 0
  $("li:lt(3)").css({
    background: "#a24",
  });
});
