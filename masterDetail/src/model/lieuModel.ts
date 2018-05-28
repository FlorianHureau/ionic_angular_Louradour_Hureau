export class Lieu {

    private ville: string;
    private adresse: string;
    private longitude: number;
    private latitude: number;

    constructor(ville:string,adresse:string,longitude:number,latitude:number){
        this.ville=ville;
        this.adresse=adresse;
        this.longitude=longitude;
        this.latitude=latitude;
    }

    getVille(){
        return this.ville;
    }

    getAdresse(){
        return this.adresse;
    }

    getLongitude(){
        return this.longitude;
    }

    getLatitude(){
        return this.latitude;
    }
}