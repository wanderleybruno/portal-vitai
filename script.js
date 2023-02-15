window.onload = function() {
    var message = document.createElement("div");
    message.innerHTML = ("Este site está em construção.<br>Em breve estará disponível para acesso.<br> Dúvidas falar com: <br> Bruno 21 965969650 (Apenas WhatsApp)  <br> 21 980488310" );
    message.style.backgroundColor = "red";
    message.style.color = "white";
    message.style.fontSize = "1.2em";
    message.style.fontWeight = "bolder";
    message.style.padding = "10px";
    message.style.textAlign = "center";
    
    
   

    document.body.insertBefore(message, document.body.firstChild);
  };
