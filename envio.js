function enviarPorEmail() {
  // 👇 Ajuste esses nomes para os ATRIBUTOS "name" que já tem nos seus inputs
  const nome = document.querySelector('input[name="nome"]').value;
  const assunto = document.querySelector('input[name="assunto"]').value;
  const mensagem = document.querySelector('textarea[name="mensagem"]').value;

  // ✅ SEU E-MAIL AQUI
  const seuEmail = 'seuemail@exemplo.com';

  const corpo = `Nome: ${nome}%0D%0A%0D%0AMensagem:%0D%0A%0D%0A${mensagem}`;
  const assuntoFinal = encodeURIComponent(assunto || 'Nova mensagem do Site de Estudos');
  
  window.location.href = `mailto:${seuEmail}?subject=${assuntoFinal}&body=${corpo}`;
  
  alert('✅ E-mail pronto! É só clicar em Enviar no seu e-mail!');
}

// Vincula a função ao botão automaticamente
document.addEventListener('DOMContentLoaded', function() {
  // 👇 Ajuste o seletor se seu botão for diferente
  const botao = document.querySelector('button[type="submit"]') || document.querySelector('button');
  if (botao) botao.setAttribute('onclick', 'enviarPorEmail(); return false;');
});
document.querySelector('input[name="seunome"]')

