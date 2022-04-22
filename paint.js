
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

  

    var puedoDibujar = false;
    var colorElejido = document.getElementById("color");
    var tamanhoPincel = document.getElementById("tamanho");
   


    function dibujarCirculo(evento) {

        if(puedoDibujar) {
            var x = evento.pageX - pantalla.offsetLeft;
            var y = evento.pageY - pantalla.offsetTop;
            var tamanho = tamanhoPincel.value;
            pincel.fillStyle = colorElejido.value;
            pincel.beginPath();
            pincel.arc(x, y, tamanho, 0, 2 * 3.14);
            pincel.fill();
        }

    }

    function borrar(){
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    }


    pantalla.onmousemove = dibujarCirculo;

    function habilitarDibujar() {

        puedoDibujar = true;
    }

    function deshabilitarDibujar() {

        puedoDibujar = false;
    }

    pantalla.onmousedown = habilitarDibujar;

    pantalla.onmouseup = deshabilitarDibujar;

    function limpiarPantalla(){

        pincel.clearRect(0,0,1050,800);

    }

    var select = document.getElementById("tamanho");
    var tamanho = 30;

    for (var tamanho = 30;tamanho >= 1; tamanho--){
        var option = document.createElement('option');
    option.text = option.value = tamanho;
    select.add(option, 30);
    }
