
var canvas = document.getElementById('canvas');
if (canvas.getContext){
var ctx = canvas.getContext('2d');
// codigo de desenho aqui
} else {
// codigo para quando o canvas nao for suportado aqui

}


var canvas = document.getElementById('canvas2');
if (canvas.getContext){
var ctx2 = canvas2.getContext('2d');
// codigo de desenho aqui
} else {
// codigo para quando o canvas nao for suportado aqui

}

try {
    // lança uma exceção
    throw "exeção";
    }
    catch (e) {
    // declarações de lidar com as exceções

    console.log(e);  // passar a exceção para o manipulador de erro
   
    
    }
    finally{
    console.log("finalizar ações pendentes");
}

var c =
document.getElementById("canvas");
var ctx =
c.getContext("2d");


var grd = ctx.createRadialGradient(650, 350, 200,650, 350, 800);
// Cria o Gradiente (x0, y0, r0, x1, y1, r1);
    
    grd.addColorStop(0, "#010884");
    grd.addColorStop(1, "#3F006F");
    //escala de cores
    
    ctx.fillStyle = grd;
    // define o estilo com o gradiente
    
    ctx.fillRect(0, 0, 1300, 700);
    //desenha a forma




var img = new Image();
img.src = 'Henrizinho3.png';
//define uma imagem


img.onload = function(){
ctx.drawImage(img,300,0,700,700);};
//Define o carregamento da imagem e a posição inicial

var img2 = new Image();
    img2.src = 'Henrizinho4.png';
    //define uma imagem
    
    
    img2.onload = function(){
    ctx.drawImage(img2,300,0,700,700);};
    //Define o carregamento da imagem e a posição inicial






ctx.moveTo(100,450);  //posição inicial (x,y)

ctx.lineTo(170, 250);  //posições dos pontos onde a linha caminha
ctx.lineTo(240, 450);
ctx.lineTo(65, 325);
ctx.lineTo(275, 325);
ctx.lineTo(100, 450);

ctx.strokeStyle = "yellow";   //define a cor do traço

ctx.lineWidth = 6;  //muda o tamanho da linha

ctx.stroke();  //fazer o traço

ctx.fillStyle = "yellow" ;

ctx.fill();





ctx2.beginPath();
//inicia o desenho do caminho
//define o arco da circunferência

ctx2.arc(650, 350, 350, 0, 2 * Math.PI);
// (x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360

ctx2.lineWidth = 2;
//muda o tamanho da linha

ctx2.strokeStyle = "#3C00FD";

ctx2.stroke();
//stroke desenha a forma vazia, fill preenche a forma



ctx.beginPath();
//inicia o desenho do caminho
//define o arco da circunferência

ctx.arc(1130, 350, 130, 0, 2 * Math.PI);
// (x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360

ctx.lineWidth = 1;
//muda o tamanho da linha

ctx.fillStyle = "#F5F5Ff";

ctx.fill();
//stroke desenha a forma vazia, fill preenche a forma



ctx.beginPath();
//inicia o desenho do caminho
//define o arco da circunferência

ctx.arc(1080, 350, 90, 0, 2 * Math.PI);
// (x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360

ctx.lineWidth = 1;
//muda o tamanho da linha

ctx.fillStyle = grd;

ctx.fill();
//stroke desenha a forma vazia, fill preenche a forma






ctx2.font = "50px Times New Roman";
//Define a fonte e o tamanho da fonte

ctx2.strokeStyle = "#00F5FD";
//muda a cor das letras

ctx2.strokeText("Henrizinho",539 , 80);
//define ( texto, x, y [, largura máxima])


ctx2.font = "50px Times New Roman";
//Define a fonte e o tamanho da fonte

ctx2.fillStyle = "#FFFF00";
//muda a cor das letras

ctx2.fillText("Nas Estrelas",525 , 650);
//define ( texto, x, y [, largura máxima])





// Cria um circulo
const circle = new Path2D();
circle.arc(650, 350, 350, 0, 2 * Math.PI);
ctx.fillStyle="transparent";
ctx.fill(circle);
// adiciona event listener para o mouse

canvas.addEventListener('mousemove', function(event) {
// verifica se o cursos do mouse está no circulo

if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
    var img2 = new Image();
    img2.src = 'Henrizinho4.png';
    //define uma imagem
    
    
    img2.onload = function(){
    ctx.drawImage(img2,300,0,700,700);};
    //Define o carregamento da imagem e a posição inicial
}
else {
    var img = new Image();
    img.src = 'Henrizinho3.png';
    //define uma imagem
    
    
    img.onload = function(){
    ctx.drawImage(img,300,0,700,700);};
    //Define o carregamento da imagem e a posição inicial
}
//Limpa o canvas e Desenha o circulo na tela

ctx.fill(circle);
})

//ctx.quadraticCurveTo(cpx, cpy, x, y);
ctx.beginPath();
ctx.moveTo(50, 210);
ctx.quadraticCurveTo(80, 50, 250,
70);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1250, 490);
ctx.quadraticCurveTo(1220, 650, 1050,
630);
ctx.stroke();