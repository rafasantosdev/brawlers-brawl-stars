function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<h1>Nenhum dado adicionado</h1>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    //Criando variáveis para armazenar os dados da pesquisa em minúsculo, para facilitar a busca
    let nome = "";
    let raridade = "";
    let categoria = "";
    let tag = "";

    for (let dado of brawler) {

        //transformando as informações em minúsculo
        nome = dado.nome.toLowerCase()
        raridade = dado.raridade.toLowerCase()
        categoria = dado.categoria.toLowerCase()
        tag = dado.tags.toLowerCase()

        //Se o input da pesquisa for o nome do brawler, ou a sua raridade, ou a sua categoria
       if (nome.includes(campoPesquisa) || raridade.includes(campoPesquisa) || categoria.includes(campoPesquisa) || tag.includes(campoPesquisa)){

        //Voltar em resultados uma estrutura HTML com os dados dos resultados da pesquisa
        resultados += `
        <div class="resultados-pesquisa">
            <h2>
                <a href="https://www.brawlstarsdicas.com.br/crow-wiki-habilidade-e-informacoes/" target="_blank">${dado.nome}</a>
            </h2>
            <h3>${dado.raridade}</h3>
            <h5>Categoria: ${dado.categoria}</h5>
            <p>${dado.descricao}</p>
            <img src="${dado.foto}" alt="Foto do Corvo" class="imagem">
        </div>
        `
       }

    }
     
    if (!resultados){
        resultados = "<h1>Nenhum brawler encontrado</h1>"
       }
    //Inserindo na seção do HTML os resultados
    section.innerHTML = resultados;
};

