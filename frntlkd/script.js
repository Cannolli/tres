const form = document.getElementById('formSenha');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmarSenha');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Remove classes antigas
  senha.classList.remove('valido', 'invalido');
  confirmar.classList.remove('valido', 'invalido');
  mensagem.textContent = '';

  // Verifica se as senhas são iguais
  if (senha.value === confirmar.value && senha.value.length >= 8) {
    senha.classList.add('valido');
    confirmar.classList.add('valido');
    mensagem.textContent = 'Senha confirmada com sucesso!';
    mensagem.style.color = 'green';
  } else {
    senha.classList.add('invalido');
    confirmar.classList.add('invalido');
    mensagem.textContent = 'As senhas não coincidem.';
    mensagem.style.color = 'red';
  }
});
