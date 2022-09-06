async function main() {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=92fefc74f19b38fd17da33d1a609fe64&hash=ed54ab55f84d6ad092fc4da2656052f1";
  const mostrarHeroes = await mostrandoPersonajes(url);
  obteniendoPersonajes(mostrarHeroes);
}

async function mostrandoPersonajes(api_url) {
  const respuesta = await fetch(api_url, {
    method: "GET",
  });
  //console.log(respuesta);
  const result = await respuesta.json();
  //console.log(data);
  return result.data.results;
}

function obteniendoPersonajes(heroes) {
  let contentHTML = "";
  const container = document.getElementById("content-heroes");
  for (let i = 0; i < heroes.length; i++) {
    contentHTML += `
        <div class="col-md-4 ">
            <div class="card-body">
                <a href="${heroes[i].urls}" target="_blank">
                    <img src="${heroes[i].thumbnail.path}.${heroes[i].thumbnail.extension}" alt="" class="img-thumbail">
                </a>
                <h3 class="title"> ${heroes[i].name}</h3>
            </div>
        </div>
    `;
  }

  container.innerHTML = contentHTML;
}
main();
