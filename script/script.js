var btnSolicitar = document.getElementById("btnSolicitar");

btnSolicitar.addEventListener("click", function (event) {
    event.preventDefault();
    
    var frmSolicitar = document.getElementById("frmSolicitar");
    console.log(frmSolicitar.autor.value);
    console.log(frmSolicitar.titulo.value);
    console.log(frmSolicitar.issn.value);
    console.log(frmSolicitar.editora.value);
    console.log(frmSolicitar.edicao.value);
    console.log(frmSolicitar.ano.value);
})
