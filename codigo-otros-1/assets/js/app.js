const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

function displayUser(username) {
 // $n.textContent = 'cargando...';
  //URL a la que queremos acceder como parámetro con fetch:
  let prom=  fetch(`${usersEndpoint}/${username}`, {method:"GET"});
  prom.then ((response)=>{
    response.json().then((data)=>{
      //para obtener los elementos denotamos entre backtic's y obtenemos
      //el nombre de la persona, el blog de la persona
      //y la localización de la persona
      $n.innerText = `${data.name}`;
      //contenido de texto como texto sin formato del nodo especificado
      $b.innerText= `${data.blog}`;
      $l.innerText= `${data.location}`;
    }).catch((error)=>{
      handleError(error);
    });
    //una vez que catch abre lee la info, catch lo lee
  }).catch((error)=>{
    handleError(error);
  });
  }
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
displayUser('stolinski');