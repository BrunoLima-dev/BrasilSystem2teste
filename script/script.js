var btnSolicitar = document.getElementById("btnSolicitar");

btnSolicitar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var frmSolicitar = document.getElementById("frmSolicitar"); 
    const select = document.getElementById("select");  

   

    const indice = select.selectedIndex;    
    const text = select.options[indice].text;
    console.log(text);
    console.log(frmSolicitar.titulo.value);
    console.log(frmSolicitar.autor.value);
    console.log(frmSolicitar.edicao.value);
    console.log(frmSolicitar.issn.value);
    console.log(frmSolicitar.ano.value);
    console.log(frmSolicitar.editora.value);

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

})
