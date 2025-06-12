function converter() {
  const input = document.getElementById("tempInput").value;
  const unidade = document.getElementById("unitSelect").value;
  const resultadoDiv = document.getElementById("resultado");

  if (input === "") {
    resultadoDiv.textContent = "Por favor, digite uma temperatura válida.";
    return;
  }

  const temperatura = parseFloat(input);
  let resultado;

  if (unidade === "CtoF") {
    resultado = (temperatura * 9/5) + 32;
    resultadoDiv.textContent = `${temperatura} °C = ${resultado.toFixed(2)} °F`;
  } else {
    resultado = (temperatura - 32) * 5/9;
    resultadoDiv.textContent = `${temperatura} °F = ${resultado.toFixed(2)} °C`;
  }
}
