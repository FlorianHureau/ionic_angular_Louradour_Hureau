export class Randonee {

    private lieuDepart:string;
    private lieuArrivee:string;
    private distance:number;
    private duree:number;

    constructor(depart:string, arrivee:string, distance:number, duree:number){
        this.distance=distance;
        this.duree=duree;
        this.lieuArrivee=arrivee;
        this.lieuDepart=depart;
    }

    getLieuDepart(){
        return this.lieuDepart;
    }

    getLieuArrivee(){
        return this.lieuArrivee;
    }

    getDuree(){
        return this.duree;
    }

    getDistance(){
        return this.distance;
    }

}