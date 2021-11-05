let valor1;
let valor2;
let operacion;
let valorTotal;

function init() {
  let resultado = document.getElementById("resultado");
  let borrar = document.getElementById("borrar");
  let uno = document.getElementById("uno");
  let dos = document.getElementById("dos");
  let tres = document.getElementById("tres");
  let cuatro = document.getElementById("cuatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let siete = document.getElementById("siete");
  let ocho = document.getElementById("ocho");
  let nueve = document.getElementById("nueve");
  let cero = document.getElementById("cero");
  let suma = document.getElementById("suma");
  let resta = document.getElementById("resta");
  let multiplicacion = document.getElementById("multiplicacion");
  let division = document.getElementById("division");
  let raiz = document.getElementById("raiz");
  let porciento = document.getElementById("porciento");
  let punto = document.getElementById("punto");
  let igual = document.getElementById("igual");
  let borrarIndividual = document.getElementById("borrarIndividual");
}
let valor = Number(0);
let valorAcumulado = Number(0);
let errorDivision = "";
uno.onclick = function (e) {
  valor = 1;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
dos.onclick = function (e) {
  valor = 2;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
tres.onclick = function (e) {
  valor = 3;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
cuatro.onclick = function (e) {
  valor = 4;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
cinco.onclick = function (e) {
  valor = 5;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
seis.onclick = function (e) {
  valor = 6;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
siete.onclick = function (e) {
  valor = 7;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
ocho.onclick = function (e) {
  valor = 8;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
nueve.onclick = function (e) {
  valor = 9;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
cero.onclick = function (e) {
  valor = 0;
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
punto.onclick = function (e) {
  valor = ".";
  resultado.textContent = resultado.textContent + valor;
  valorAcumulado = Number(resultado.textContent);
};
borrar.onclick = function (e) {
  resetear();
};
suma.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "-";
  limpiar();
};
multiplicacion.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "*";
  limpiar();
};
division.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "/";
  limpiar();
};
modulo.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "%";
  limpiar();
};
sumayresta.onclick = function (e) {
  valor1 = resultado.textContent;
  operacion = "+/-";
  limpiar();
};
igual.onclick = function (e) {
  valor2 = resultado.textContent;
  limpiar();
  resolver();
};
borrarIndividual.onclick = function (e) {
    alert("Próximamente borrará, estamos trabajando en las actualizaciones")
  };
function resetear() {
  resultado.textContent = "";
  valor1 = 0;
  valor2 = 0;
  operacion = "";
}
function limpiar() {
  resultado.textContent = "";
}

function resolver() {
  let igual = "";
  switch (operacion) {
    case "+":
      valorTotal = Number(valor1) + Number(valor2);
      resultado.textContent = valorTotal;
      break;
    case "-":
      valorTotal = Number(valor1) - Number(valor2);
      resultado.textContent = valorTotal;
      break;
    case "*":
      valorTotal = Number(valor1) * Number(valor2);
      resultado.textContent = valorTotal;
      break;
    case "/":
      valorTotal = Number(valor1) / Number(valor2);
      resultado.textContent = valorTotal;
      break;
    case "%":
      valorTotal = Number(valor1) % Number(valor2);
      resultado.textContent = valorTotal;
      break;
    case "+/-":
      if (valor1 > 0) {
        valorTotal = valor1 * -1;
      } else if (valor1 < 0) {
        valorTotal = valor1 * -1;
      }
      resultado.textContent = valorTotal;
      break;
  }
}