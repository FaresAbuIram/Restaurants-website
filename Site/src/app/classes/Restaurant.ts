export class Restaurant {
    id: any;
    name: String;
    city: String;
    street: String;
    lat: Number;
    lng: Number;
    phone: Number;
    image: String;
    constructor(name?: String, city?: String, street?: String, id?, lat?: Number, lng?: Number, phone?: Number, image?: String) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.street = street;
        this.lat = lat;
        this.lng = lng;
        this.phone = phone;
        this.image = image;
    }

}