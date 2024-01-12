var title = document.getElementById('sm-title');

var sobremim = document.getElementById('quem-sou-eu');
var conhecimentos = document.getElementById('conhecimentos');
var cursos = document.getElementById('cursos');
var projetos = document.getElementById('projetos');

var sobremimfield = document.getElementById('qse-field');
var conhecimentosfield = document.getElementById('conhecimentos-field');
var cursosfield = document.getElementById('cursos-field');
var projetosfield = document.getElementById('projetos-field');

title.innerHTML = 'Sobre mim';
sobremimfield.style.display = 'flex';

function Sobremim() {
    setTimeout(reset, 1);
    setTimeout(display, 1);
}
function display() {
    if (cursos.checked) {
        title.innerHTML = 'Cursos';
        cursosfield.style.display = 'flex';
    }
    if (conhecimentos.checked) {
        title.innerHTML = 'Conhecimentos';
        conhecimentosfield.style.display = 'flex';
    }
    if (projetos.checked) {
        title.innerHTML = 'Projetos';
        projetosfield.style.display = 'flex';
    }
    if (sobremim.checked) {
        title.innerHTML = 'Sobre mim';
        sobremimfield.style.display = 'flex';
    }
}

function reset() {
    cursosfield.style.display = 'none';
    conhecimentosfield.style.display = 'none';
    projetosfield.style.display = 'none';
    sobremimfield.style.display = 'none';
}
