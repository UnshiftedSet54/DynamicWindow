//Eventos del Moouse para realizar el Drag & Drop.
var windowElement = document.getElementById('window');
var emptyDiv = document.getElementById('window-header-empty');
var mouseX, mouseY;

emptyDiv.addEventListener('mousedown', mDown);

function mDown(e) {
    mouseX = e.clientX - windowElement.offsetLeft;
    mouseY = e.clientY - windowElement.offsetTop;
    console.log(mouseX + "," + mouseY);

    window.addEventListener('mousemove', move);
}

function move(ev) {
    let newLeft = ev.clientX - mouseX;
    let newTop = ev.clientY - mouseY;
    console.log("New: " + newLeft + "," + newTop);


    windowElement.style.left = newLeft + 'px';
    windowElement.style.top = newTop + 'px';

    windowElement.addEventListener('mouseup', mUp);
}

function mUp() {
    window.removeEventListener('mousemove', move);
}

//------------------------------------------------------------------------

// Eventos para anadir funcionalidad a los botones que controlan la ventana completa.
var btnMaximizar = document.getElementById('maximizar');
var btnMinimizar = document.getElementById('minimizar');
var btnCerrar = document.getElementById('cerrar');
var btnContinuar = document.getElementById('btn');
var windowBody = document.getElementById('window-content');
var shadowDiv = document.getElementById('overlay');
var btnMaxState = false;
var btnMinState = false;
var min_windowElementHeight;
var max_windowElementHeight, max_windowElementWidth, max_windowElementTop, max_windowElementLeft;

windowElement.onfocus = () => {

    btnMaximizar.onclick = () => {
        if (btnMaxState == false) {
            max_windowElementTop = parseInt(windowElement.style.top);
            console.log(windowElement.getBoundingClientRect());
            max_windowElementLeft = parseInt(windowElement.style.left);
            max_windowElementWidth = parseInt(windowElement.style.width);
            max_windowElementHeight = parseInt(windowElement.style.height);
            windowElement.style.top = 0 + 'px';
            windowElement.style.left = 2 + 'px';
            windowElement.style.width = 99.3 + '%';
            windowElement.style.height = 99.5 + 'vh';
            btnMaxState = true;
        } else {
            if (btnMaxState == true) {
                windowElement.style.top = max_windowElementTop + 'px';
                windowElement.style.left = max_windowElementLeft + 'px';
                windowElement.style.width = max_windowElementWidth + 'px';
                windowElement.style.height = max_windowElementHeight + 'px';
                btnMaxState = false;
            } else {
                btnMaxState = false;
            }
        }
    }

    btnMinimizar.onclick = () => {
        if (btnMinState == false) {
            min_windowElementHeight = parseInt(windowElement.style.height);
            windowBody.style.display = 'none';
            windowElement.style.minHeight = 0 + 'px';
            windowElement.style.height = 23 + 'px';
            windowElement.style.resize = 'none';
            btnMinState = true;
        } else {
            windowBody.style.display = 'block';
            windowElement.style.minHeight = 376 + 'px';
            windowElement.style.height = min_windowElementHeight + 'px';
            windowElement.style.resize = 'both';
            btnMinState = false;
        }
    }

    btnCerrar.onclick = () => {
        windowElement.style.display = 'none';
        shadowDiv.style.display = 'none';
    }

    btnContinuar.onclick = () => {
        windowElement.style.display = 'block';
        shadowDiv.style.display = 'block';
    }

}