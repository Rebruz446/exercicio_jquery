$(function () {
  //selecionando todos os parágrafos e aplicando um estilo
  $("p").css("color", "blue");

  //aplicando um estilo para os parágragos que são filhos diretos da section
  $("section > p").css({
    color: "white",
    background: "red",
  });

  //trocando o texto dos parágrafos que são irmãos dentro da div
  $("div ~ p").text("Parágrafo irmão");

  //Selecionando o elemento após imediato, para estilzar qualquer elementos que está imediatamente após a div basta trocar o seletor para (*)
  // $("div + *")
  $("div + b")
    .css({
      background: "black",
      color: "white",
    })
    .text("TAG B que está imediatamente após o span");
});
