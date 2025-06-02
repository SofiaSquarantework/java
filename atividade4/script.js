  function cadastrar() {
            // Captura os valores digitados pelo usuário
            
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const idade = document.getElementById("idade").value.trim();
            const endereco = document.getElementById("endereco").value.trim();
            const telefone = document.getElementById("telefona").value.trim()
            const resultado = document.getElementById("resultado");
             

            // Verifica se algum dos campos está vazio
            if (nome === "" || email === "" || idade === "" || endereco === "" || telefone ==="" ) {
                resultado.style.color = "red"; // Muda a cor da mensagem para vermelho
                resultado.textContent = "POR FAVOR ,PREENCHA TODOS OS CAMPOS."; // Exibe aviso
                return; // Interrompe a função
            }

            // Se todos os campos estiverem preenchidos, exibe a mensagem de sucesso
            resultado.style.color = "green"; // Cor verde para confirmação
            resultado.textContent = `USUÁRIO CADASTRADO COM SUCESSO: ${nome} (${email}), ${idade} anos, residente em ${endereco}, ${telefone}.`;
        }