/* References are mostly from W3S - https://www.w3schools.com/jsref/api_canvas.asp */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    draw(ctx, size = 18, color = "black") {
        const radius = size / 2;
        ctx.beginPath();    /* No declaration of 'beginPath'. W3S - beginPath() : Begins a new path or resets the current path. */
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);   /* arc() : Adds an arc/curve (circle, or parts of a circle) to the path. */
        ctx.fill(); /* fill() : Fills the current path */
    }
}
