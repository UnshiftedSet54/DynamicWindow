//Eventos del Moouse para realizar el Drag & Drop.
let windowElement = document.querySelector('.window')
let emptyDiv = document.querySelector('.window-header')
let mouseX, mouseY;

emptyDiv.addEventListener('mousedown', mDown);

function mDown(e) {
    mouseX = e.clientX - windowElement.offsetLeft;
    mouseY = e.clientY - windowElement.offsetTop;
    window.addEventListener('mousemove', move);
}

function move(ev) {
    windowElement.addEventListener('mouseup', mUp);
    let newLeft = ev.clientX - mouseX;
    let newTop = ev.clientY - mouseY;
    windowElement.style.left = newLeft + 'px';
    windowElement.style.top = newTop + 'px';
}

function mUp() {
    window.removeEventListener('mousemove', move);
}

// Eventos para anadir funcionalidad a los botones que controlan la ventana completa.
let bntMinMax = document.getElementsByClassName('min-max')
let btnMaximizar = bntMinMax[0]
let btnMinimizar = bntMinMax[1]
let btnCerrar = document.querySelector('.cerrar')
let btnContinuar = document.querySelector('.btn')
let windowBody = document.querySelector('.window-content');
let shadowDiv = document.querySelector('.overlay');
let btnMaxState = false;
let btnMinState = false;
let min_windowElementHeight;
let max_windowElementHeight, max_windowElementWidth, max_windowElementTop, max_windowElementLeft;

windowElement.onfocus = () => {
    btnMaximizar.onclick = () => {
        if (btnMaxState == false) {
            max_windowElementTop = parseInt(windowElement.style.top);
            console.log(windowElement.getBoundingClientRect());
            max_windowElementLeft = parseInt(windowElement.style.left);
            max_windowElementWidth = parseInt(windowElement.style.width);
            max_windowElementHeight = parseInt(windowElement.style.height);
            windowElement.style.top = '0px';
            windowElement.style.left = '2px';
            windowElement.style.width = '99.3%';
            windowElement.style.height = '99.5vh';
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
            windowElement.style.minHeight = '0px';
            windowElement.style.height = '23px';
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