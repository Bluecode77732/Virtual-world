class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    draw(ctx, size = 18, color = "black") {
        const rad = size / 2;
        /* ctx.beginPath(); */    /* No declaration of 'beginPath'. */

    }

}