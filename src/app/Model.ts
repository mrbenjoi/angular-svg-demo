

export class Area {

    coordinates: Coordinates[] = []

    public get isEmpty(): boolean {
        return this.coordinates.length == 0
    }

}

export class Coordinates {

    lat: Number
    lon: Number

    constructor(
        lat: Number, lon: Number
    ) {
        this.lat = lat
        this.lon = lon
    }

}