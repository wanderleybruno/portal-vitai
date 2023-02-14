window.alert("Site em construção, dúvidas entrar em contato com:" + "\n" + "Bruno 21 965969650")



  window.onload = function() {
    var message = document.createElement("div");
    message.innerHTML = "Este site está em construção. Em breve estará disponível para acesso.";
    message.style.backgroundColor = "red";
    message.style.color = "white";
    message.style.fontSize = "1.5em";
    message.style.padding = "20px";
    message.style.textAlign = "center";
    document.body.insertBefore(message, document.body.firstChild);
  };
