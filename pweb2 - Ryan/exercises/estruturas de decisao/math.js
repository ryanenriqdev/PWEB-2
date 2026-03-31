function area_circulo(raio) {
    const PI = 3.14
    return Math.PI * raio ** 2
}

function calculadora(n1, n2, operacao) {
    switch(operacao) {
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
            break;
        default:
            return 'Informe uma operação válida!';
    }
}

function tipo_triangulo(l1, l2, l3) {

    if( ((l1 + l2) > l3) && ((l1 + l3) > l2) && ((l2 + l3) > l1) ) {
        if(l1===l2 && l2===l3) {
            return 'Equilátero';
        }
        else if(l1===l2 && l2!==l3 || l1===l3 && l3!==l2 || l2===l3 && l3!==l1) {
            return 'Isósceles';
        }
        else{
            return 'Escaleno';
        }
    }
    else {
        return 'None';
    }

}


export default { area_circulo, calculadora, tipo_triangulo };