// script.js
const hoje = new Date();
const anoAtual = hoje.getFullYear();
const mesAtual = String(hoje.getMonth() + 1).padStart(2, '0');
const diaAtual = String(hoje.getDate()).padStart(2, '0');

document.getElementById('dataInicial').value = `${anoAtual}-${mesAtual}-${diaAtual}`;

function formatarData(data) {
  const d = String(data.getDate()).padStart(2, '0');
  const m = String(data.getMonth() + 1).padStart(2, '0');
  const y = data.getFullYear();
  return `${d}/${m}/${y}`;
}

function calcularPrazo() {
  const dataInicialStr = document.getElementById('dataInicial').value;
  const diasStr = document.getElementById('dias').value;
  const dataFinalEl = document.getElementById('dataFinal');
  const resultadoDiv = document.getElementById('resultado');

  if (!dataInicialStr || !diasStr) {
    resultadoDiv.style.borderColor = '#ff6b6b';
    dataFinalEl.textContent = 'Preencha todos os campos';
    return;
  }

  const [ano, mes, dia] = dataInicialStr.split('-').map(Number);
  const data = new Date(ano, mes - 1, dia);

  const dias = parseInt(diasStr);

  if (isNaN(dias) || dias < 0) {
    dataFinalEl.textContent = 'Quantidade inválida';
    return;
  }

  data.setDate(data.getDate() + dias);

  dataFinalEl.textContent = formatarData(data);
  resultadoDiv.style.borderColor = '#4a90e2';
}

function limparCampos() {
  document.getElementById('dias').value = '';
  document.getElementById('dataFinal').textContent = '—';

  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');

  document.getElementById('dataInicial').value = `${ano}-${mes}-${dia}`;
}
