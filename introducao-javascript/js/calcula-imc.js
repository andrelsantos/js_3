console.log("Carregado de arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "André Nutrição";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0;i < pacientes.length;i++){

  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){
    tdImc.textContent = "Peso Inválido";
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida){
    tdImc.textContent = "Altura Inválida";
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso >= 0 && peso <= 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
