document.getElementById('despesa-form').addEventListener('submit', adicionarDespesa);

function adicionarDespesa(event) {
  event.preventDefault();
  
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;
  
  if (!isNaN(valor) && categoria !== '') {
    const listaDespesas = document.getElementById('lista-despesas');
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Valor: R$ ${valor.toFixed(2)} - Categoria: ${categoria}`));
    
    listaDespesas.appendChild(li);
    
    atualizarResumo(valor);
    
    document.getElementById('valor').value = '';
    document.getElementById('categoria').value = '';
  } else {
