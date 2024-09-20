document.querySelector('button').addEventListener('click', getArtist);

function getArtist(){
  let artist = document.querySelector('input').value

  fetch
