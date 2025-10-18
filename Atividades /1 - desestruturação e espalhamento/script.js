// Objeto inicial
        let pessoa = {
            nome: "nenhum",
            idade: 0
        };

        const nomeDOM = document.getElementById("nome");
        const idadeDOM = document.getElementById("idade");
        const novoNomeInput = document.getElementById("novoNome");
        const novaIdadeInput = document.getElementById("novaIdade");
        const registro = document.getElementById("registrar");

        function atualizaDOM({nome, idade}){
            nomeDOM.textContent = `Nome : ${nome}`;
            idadeDOM.textContent = `Idade : ${idade}`;  
        }

        // inicializa o DOM com os dados do obj pessoa
        atualizaDOM(pessoa);

        function atualizaOBJ(){
            // obj auxiliar
            const pessoaAuxiliar = {};

             if (novoNomeInput.value) {
                pessoaAuxiliar.nome = novoNomeInput.value;
            }

            if (novaIdadeInput.value) {
                pessoaAuxiliar.idade = novaIdadeInput.value;
            }

            // atualizando obj pessoa com as novas informções 
            pessoa = { ...pessoa, ...pessoaAuxiliar };

            // atualizando o DOM
            atualizaDOM(pessoa);
            
            novoNomeInput.value = "";
            novaIdadeInput.value = "";  
        }

        registro.addEventListener("click", atualizaOBJ);
