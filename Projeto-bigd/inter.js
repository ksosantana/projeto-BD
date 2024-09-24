// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos inputs
    const fullName = document.getElementById('fullName').value;
    const neighborhood = document.getElementById('neighborhood').value;

    // Aqui você pode armazenar os dados ou enviá-los para um servidor

    // Exemplo de armazenamento no localStorage (se necessário)
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('neighborhood', neighborhood);

    // Redireciona para a página de perguntas
    window.location.href = 'questions.html'; // Certifique-se de ter esta página criada
});
