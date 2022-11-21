

var canvas = new fabric.Canvas("myCanvas");
blockwidth = 30;
blockheigth = 30;

playX = 10;
playY = 10;
var playerobjeto = "";
function playerUpdate() {
    fabric.Image.fromURL('player.png', function (Img) {
        playerobjeto = Img;
        playerobjeto.scaleToWidth(150);
        playerobjeto.scaleToHeight(140);
        playerobjeto.set({
            top: playY,
            left: playX
        });
        canvas.add(playerobjeto);
    });
}
function newimage(parametro) {
    fabric.Image.fromURL(parametro, function (Img) {
        blockobjeto = Img;
        blockobjeto.scaleToWidth(blockwidth);
        blockobjeto.scaleToHeight(blockheigth);
        blockobjeto.set({
            top: playY,
            left: playX
        });
        canvas.add(blockobjeto);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    tecla = e.keyCode;
    console.log(tecla);
    if(e.shiftKey==true && tecla=="80"){

        blockwidth=blockwidth+10;
        blockheigth=blockheigth+10;
        document.getElementById('currentwidth').innerHTML=blockwidth;
        document.getElementById('currentheight').innerHTML=blockheigth;
        
    }
    if(e.shiftKey==true && tecla=="77"){

        blockwidth=blockwidth-10;
        blockheigth=blockheigth-10;
        document.getElementById('currentwidth').innerHTML=blockwidth;
        document.getElementById('currentheight').innerHTML=blockheigth;
        
    }
    if(tecla=='38'){
        up();
        console.log('cima');
    }
    if(tecla=='40'){
        down();
        console.log('baixo');
    }
    if(tecla=='37'){
        left();
        console.log('esquerda');
    }
    if(tecla=='39'){
        right();
        console.log('direita');
    }
    if(tecla=='87'){
        newimage('wall.jpg');
        console.log('w');
    }
    if(tecla=='71'){
        newimage('ground.png');
        console.log('g');
    }
    if(tecla=='76'){
        newimage('light_green.png');
        console.log('l');
    }
    if(tecla=='84'){
        newimage('trunk.jpg');
        console.log('t');
    }
    if(tecla=='82'){
        newimage('roof.jpg');
        console.log('r');
    }
    if(tecla=='89'){
        newimage('yellow_wall.png');
        console.log('y');
    }
    if(tecla=='68'){
        newimage('dark_green.png');
        console.log('d');
    }
    if(tecla=='85'){
        newimage('unique.png');
        console.log('u');
    }
    if(tecla=='67'){
        newimage('cloud.jpg');
        console.log('c');
    }
}
function up(){
    if(playY>=0){
        playY=playY-blockheigth;
        canvas.remove(playerobjeto);
        playerUpdate();
    }
}
function down(){
    if(playY<=500){
        playY=playY+blockheigth;
        canvas.remove(playerobjeto);
        playerUpdate();
    }
}
function left(){
    if(playX>=0){
        playX=playX-blockheigth;
        canvas.remove(playerobjeto);
        playerUpdate();
    }
}
function right(){
    if(playX<=850){
        playX=playX+blockheigth;
        canvas.remove(playerobjeto);
        playerUpdate();
    }
}
