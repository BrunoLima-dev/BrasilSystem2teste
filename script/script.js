var btnSolicitar = document.getElementById("btnSolicitar");
var btnBloquear = document.getElementById("btnSolicitar");
  

btnSolicitar.addEventListener("click", function (event) {
 

  var frmSolicitar = document.getElementById("frmSolicitar");
  const select = document.getElementById("select");

  btnBloquear.addEventListener("click", (event)); {
    var ano = document.getElementById("ano"); 
       

    if (frmSolicitar.ano.value < 1900 || frmSolicitar.ano.value > 2019 ) {
        ano.setCustomValidity("Ano inválido");
        ano.reportValidity();
        alert("Digite Ano entere entre 1900 e 2019");
        ano.block();        
      }
    };
        
    
    const indice = select.selectedIndex;
    const text = select.options[indice].text;  

    //Cria o elemento tr
    var linhaTabela = document.createElement("tr");

    //Cria os elementos td
    var colunaVinculo = document.createElement("td");
    var colunaTitulo = document.createElement("td");
    var colunaAutor = document.createElement("td");
    var colunaEdicao = document.createElement("td");
    var colunaISSN = document.createElement("td");
    var colunaAno = document.createElement("td");
    var colunaEditora = document.createElement("td");

    //Adicionar o conteudo de cada celular
    colunaVinculo.textContent = text;
    colunaTitulo.textContent = frmSolicitar.titulo.value;
    colunaAutor.textContent = frmSolicitar.autor.value;
    colunaEdicao.textContent = frmSolicitar.edicao.value;
    colunaISSN.textContent = frmSolicitar.issn.value;
    colunaAno.textContent = frmSolicitar.ano.value;
    colunaEditora.textContent = frmSolicitar.editora.value;

    //Obtendo referencia da tabela solicitar
    var tabelaSolicita = document.getElementById("table").querySelector("tbody");

    //inserindo todas as celulas dentro da linha
    tabelaSolicita.appendChild(colunaVinculo);
    tabelaSolicita.appendChild(colunaTitulo);
    tabelaSolicita.appendChild(colunaAutor);
    tabelaSolicita.appendChild(colunaEdicao);
    tabelaSolicita.appendChild(colunaISSN);
    tabelaSolicita.appendChild(colunaAno);
    tabelaSolicita.appendChild(colunaEditora);

    tabelaSolicita.appendChild(linhaTabela);
});

  // Bloqueia os inputs do formulario
  function block() {
    document.querySelector("select").disabled = true;
    document.getElementById("autor").disabled = true;
    document.getElementById("titulo").disabled = true;
    document.getElementById("issn").disabled = true;
    document.getElementById("editora").disabled = true;
    document.getElementById("edicao").disabled = true;
    document.getElementById("ano").disabled = true;
  }

  //Inicio Contador regressivo
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  setInterval(function () {

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }else if (timer == 0) {
      block();
      alert("Tempo esgotado");
    }
    
  }, 1000);
}


  window.onload = function () {
    var duration = 3600 * 1; // Conversão para segundos
    var display = document.querySelector('#time');
    startTimer(duration, display);
  }
 

  


