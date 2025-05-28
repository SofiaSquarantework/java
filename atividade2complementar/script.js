function somar() {
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);
  let resultado = n1 + n2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtrair() {
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);
  let resultado = n1 - n2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicar() {
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);
  let resultado = n1 * n2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function dividir() {
  let n1 = parseFloat(document.getElementById("numero1").value);
  let n2 = parseFloat(document.getElementById("numero2").value);
  if (n2 === 0) {
    document.getElementById("resultado").innerText = "Erro: divisão por zero!";
  } else {
    let resultado = n1 / n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
  }
}
