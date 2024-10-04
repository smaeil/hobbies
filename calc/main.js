let mem = 0.0 ;
let resetRequired = false ;
let memo = 0.0 ;


function funcCalc(input) {
    
    const dis = document.getElementById('display');
    const m = document.getElementById('m') ;
    const ops = document.getElementById('ops');
    

    switch (input) {
        case 'ac':
            dis.innerHTML = '0';
            mem = 0.0 ;
            break;

        case 'ml' :
            if (dis.innerHTML == 0) {
                m.innerHTML = '' ;
                memo = 0.0 ;
            } else {
                memo = parseFloat(dis.innerHTML);
                m.innerHTML = 'M';
            }

            break;

        case 'm' :
            if (m.innerHTML === 'M' && memo !== 0.0 ) {
                dis.innerHTML = memo ;
            }
            break;

        case '<' :
            if (dis.innerHTML.length <= 1 ) {
                dis.innerHTML = 0;
            } else {

                dis.innerHTML = dis.innerHTML.slice(0, (dis.innerHTML.length - 1));
            }
            break;
        default:
            console.log('Other');
    }
}

function numCalc (input) {

    const dis = document.getElementById('display') ;
    const ops = document.getElementById('ops');

    if (dis.innerHTML === '0') {
        dis.innerHTML = '' + input ;

    } else if (resetRequired === true) {
        dis.innerHTML = '' + input ;
        resetRequired = false;
    } else {
        dis.innerHTML = dis.innerHTML + input;
    }
}

function screenFlash () {
    const dis = document.getElementById('display');
    dis.style.animationName = 'flashout';
    setTimeout( () => {
        dis.style.animationName = 'no';
    },500);
}

function equalCalc () {
    const dis = document.getElementById('display');
    const ops = document.getElementById('ops');
    const num = parseFloat(dis.innerHTML);
    resetRequired = true;
    screenFlash();

    switch (ops.innerHTML) {
        case ' ':
            break;
        case '+' :
            mem = mem + num ;
            dis.innerHTML = mem ;
            break;
        case '-' :
            mem = mem - num ;
            dis.innerHTML = mem;
            break;
        case '*' :
            mem = mem * num ;
            dis.innerHTML = mem ;
            break;
        case '/' :
            if (num === 0) {
                dis.innerHTML = 'ERROR' ;
            } else {
                mem = mem / num ;
                dis.innerHTML = mem ;
            }
            break;
        case '%' :
            mem = mem * (num / 100);
            dis.innerHTML = mem ;
            break;
        case 'mod':
            mem = mem % num ;
            dis.innerHTML = mem ;
            break;
        case '**' :
            mem = mem ** num ;
            dis.innerHTML = mem;
            break;
        case 'r' :
            mem = num ** 0.5 ;
            dis.innerHTML = mem ;
            break;
    }

    ops.innerHTML = ' ';

}


function opsCalc (input) {
    const dis = document.getElementById('display') ;
    const ops = document.getElementById('ops');
    const num = parseFloat(dis.innerHTML) ;
    resetRequired = true;

    if (ops.innerHTML == ' ') {
        ops.innerHTML = input ;
        screenFlash();
        mem = num;
    } else {
        equalCalc();
        screenFlash();
        ops.innerHTML = input ;
    }
}
