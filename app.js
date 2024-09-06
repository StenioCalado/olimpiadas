function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos pelo ID "resultados-pesquisa".

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.<p/>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada elemento "dado" no array "dados".
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Concatena HTML para criar um novo elemento de resultado.
          resultados += `
          <div class="item-resultado">
           <h2>
             <a href="#" target="_blank">${dado.titulo}</a>
           </h2>
           <p class="descricao-meta">${dado.descricao}</p>
           <a href=${dado.link} target="_blank">Mais informações</a>
         </div>
       `;
        }
      // Cada resultado terá um título, descrição e link.
       
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado para o conteúdo interno da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
  }

 