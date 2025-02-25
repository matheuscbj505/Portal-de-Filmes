const API_KEY = '3b94345afac34be606f938cf8d458991'

function exibeFilmes () {
    let divTela = document.getElementById ('tela');
    let texto = '';

    let dados = JSON.parse ( this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results [i];

        texto = texto + `
        <div class="box-noticia">
            <img src="${filme.poster_path}" alt="">
            <span class="titulo">${filme.original_title} </span>
            <span class="text">${filme.overview}
                <a href="#">Leia mais...</a>
            </span>
        </div>
        `

    }

    divTela.innerHTML = texto;
}


function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;
    
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes ();
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?q=${}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
    xhr.send ();
}
document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);
