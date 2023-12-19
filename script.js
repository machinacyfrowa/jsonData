// Math.round(Math.random()*200)-100 
// całkowita liczba losowa <-100;100>

class Point {
    name = "" //nazwa punktu
    x = 0; //współrzędna x
    y = 0; //współrzędna y
    constructor() {
        this.name = "Punkt ";
        this.x = Math.round(Math.random()*200)-100;
        this.y = Math.round(Math.random()*200)-100;
    }
    display() {
        document.write(this.name + " o współrzędnych ("+ this.x + ", " + this.y + ")<br>");
        //document.write(`Punkt o współrzędnych (${this.x}, ${this.y})<br>`);
    }
    appendName(suffix) {
        this.name += suffix;
    }
}

for(let i=0; i<100; i++) {
    let p = new Point();
    p.appendName(i);
    p.display();
}
//do zastanowienia sie
let points = Array(100).fill(new Point());
console.log(points);