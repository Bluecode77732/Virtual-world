class Segment {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    equals(seg) {
        return this.includes(seg.p1) && this.includes(seg.p2);
    }

    includes(point) {
        return this.p1.equals(point) || this.p2.equals(point);
    }

    

}