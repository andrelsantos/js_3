console.log("Carregado de arquivo externo 2");
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
  paciente.addEventListener("dblclick", function() {
    this.remove();
  });
});
