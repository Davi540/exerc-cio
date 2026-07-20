
const cepInput = document.getElementById('cep');


cepInput.addEventListener('blur', async () => {
    
    let cep = cepInput.value.replace(/\D/g, '');

    
    if (cep.length !== 8) return;

    
    const url = `https://viacep.com.br{cep}/json/`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        
        if (dados.erro) {
            alert('CEP não encontrado!');
            return;
        }

        
        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('localidade').value = dados.localidade;
        document.getElementById('uf').value = dados.uf;

    } catch (error) {
        console.error('Erro ao consultar a API:', error);
    }
});
