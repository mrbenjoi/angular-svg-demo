

class Area {

    constructor(
        public coordinates: Coordinates[] = []
    ) { }

    public get isEmpty(): boolean {
        return this.coordinates.length == 0
    }

}

class Coordinates {

    constructor(
        public lat: Number,
        public lon: Number
    ) { }

}