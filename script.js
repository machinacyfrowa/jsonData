// Math.round(Math.random()*200)-100 
// całkowita liczba losowa <-100;100>

class Point {
    x = 0; //współrzędna x
    y = 0; //współrzędna y
    constructor() {
        this.x = Math.round(Math.random()*200)-100;
        this.y = Math.round(Math.random()*200)-100;
    }
    display() {
        document.write("Punkt o współrzędnych ("+ this.x + ", " + this.y + ")<br>");
        //document.write(`Punkt o współrzędnych (${this.x}, ${this.y})<br>`);
    }
}

for(let i=0; i<100; i++) {
    let p = new Point();
    p.display();
}