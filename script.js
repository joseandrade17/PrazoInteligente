// Define a data de hoje automaticamente no formato correto para <input type="date">
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
document.getElementById('dataInicial').value = `${ano}-${mes}-${dia}`;

function formatarData(data) {
  const d = String(data.getDate()).padStart(2, '0');
  const m = String(data.getMonth() + 1).padStart(2, '0');
  const y = data.getFullYear();
  return `${d}/${m}/${y}`;
}

function calcularPrazo() {
  const dataInicialStr = document.getElementById('dataInicial').value;
  const diasStr = document.getElementById('dias').value;
  const resultadoDiv = document.getElementById('resultado');
  const dataFinalEl = document.getElementById('dataFinal');

  if (!dataInicialStr || !diasStr) {
    resultadoDiv.style.borderColor = '#ff6b6b';
    dataFinalEl.textContent = 'Preencha todos os campos';
    return;
  }

  const data = new Date(dataInicialStr);
  const dias = parseInt(diasStr);

  if (isNaN(dias) || dias < 0) {
    dataFinalEl.textContent = 'Quantidade de dias inválida';
    return;
  }

  data.setDate(data.getDate() + dias);

  dataFinalEl.textContent = formatarData(data);
  resultadoDiv.style.borderColor = '#4a90e2'; // cor de sucesso
}