var triangle1Area = getTriangleArea(10, -3);
var triangle2Area = getTriangleArea(10, 3);
var triangle3Area = getTriangleArea(10, 30);

function getTriangleArea(a, h) {
    if ( (a <= 0) || (h <= 0) ) {
        alert ('nieprawidłowe dane, wpisz liczby większe od 0');
        console.log('nieprawidłowe dane, wpisz liczby większe od 0');
	} else {
        return a*h/2;
    }
}

console.log( getTriangleArea(10,-6) );

console.log( triangle1Area );
console.log( triangle2Area );
console.log( triangle3Area );
