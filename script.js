let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra =  document.querySelector('progress');
    
}