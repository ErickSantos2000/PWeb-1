// Objeto inicial
        let pessoa = {
            nome: "none",
            idade: 0
        };

        const nomeDOM = document.getElementById("nome");
        const idadeDOM = document.getElementById("idade");
        const novoNomeInput = document.getElementById("novoNome");
        const novaIdadeInput = document.getElementById("novaIdade");
        const registro = document.getElementById("registrar");

        // inicializa o DOM com os dados do obj pessoa
        const {nome, idade} = pessoa
        nomeDOM.textContent = `Nome : ${nome}`;
        idadeDOM.textContent = `Idade : ${idade}`;  

        registro.addEventListener("click", () => {
            // pessoa com novos valores
            const novaPessoa = {};

            if (novoNomeInput.value) {
                novaPessoa.nome = novoNomeInput.value;
            }

            if (novaIdadeInput.value) {
                novaPessoa.idade = novaIdadeInput.value;
            }

            // passa as novas informações 
            pessoa = { ...pessoa, ...novaPessoa };

            // atualizando o DOM
            const {nome, idade} = pessoa

            nomeDOM.textContent = `Nome : ${nome}`;
            idadeDOM.textContent = `Idade : ${idade}`;   

            //
            novoNomeInput.value = "";
            novaIdadeInput.value = "";  

            });
