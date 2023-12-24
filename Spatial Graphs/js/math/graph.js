class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    addPoint(point) {
        this.points.push(point);
    }

    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
    }
    
    tryAddPoint(point) {
        if(!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }

    removePoint(point) {
        const segs = this.getSegmentsWithPoint(point);
        for(const seg of segs) {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1);
    }

    addSegment(seg) {
        this.segments.push(seg);
    }
    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }
    
}