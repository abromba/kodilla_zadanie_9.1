var triangle1Area = getTriangleArea(10, -3);
var triangle2Area = getTriangleArea(10, 3);
var triangle3Area = getTriangleArea(10, 30);

function getTriangleArea(a, h) {
    return a <=0 || h <=0 ? 'Podaj liczbe większą od 0' : a * h / 2;
}

console.log(getTriangleArea(10,-6));

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);