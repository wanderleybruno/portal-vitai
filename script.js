window.onload = function() {
    var message = document.createElement("div");
    message.innerHTML = ("Este site está em construção.<br>Todas as mídas presentes no site são meramente ilustrativas.<br> Dúvidas falar com: <br> Bruno 21 965969650 (Apenas WhatsApp)  <br> 21 980488310 <br> OBS: Site Fictício" );
    message.style.backgroundColor = "red";
    message.style.color = "white";
    message.style.fontSize = "1.2em";
    message.style.fontWeight = "bolder";
    message.style.padding = "10px";
    message.style.textAlign = "center";
    
    
   

    document.body.insertBefore(message, document.body.firstChild);
  };




  /* ________teste______ */

  console.clear()

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})

function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}

