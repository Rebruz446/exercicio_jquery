$(function () {
  //Selecionando elementos (tags)
  $("h5").text("Alterando o texto da tag H5"); //alterando o texto
  console.log($("h5").text()); // recuperando o texto e exibindo no console

  //Selecionando classes
  $(".par").css("color", "green").text("Classe par");

  //Selecionando id
  $("#impar")
    .css({
      color: "white",
      background: "black",
      padding: "3px",
      position: "relative",
      top: "10px",
      "font-size": "1.2rem", //quando o atributo é composto por mais de uma palavra colocamos ""
    })
    .text("ID impar");
});
