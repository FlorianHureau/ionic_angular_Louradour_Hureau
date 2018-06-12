import { Lieu } from '../model/lieuModel'

export class Randonee {

    private lieuDepart:Lieu;
    private lieuArrivee:Lieu;
    private etapes:Array<Lieu>;
    private distance:number;
    private duree:number;

    constructor(depart:Lieu, arrivee:Lieu, etapes:Array<Lieu>, distance:number, duree:number){
        this.distance=distance;
        this.duree=duree;
        this.lieuArrivee=arrivee;
        this.lieuDepart=depart;
        this.etapes=etapes;
    }

    getLieuDepart(){
        return this.lieuDepart;
    }

    getLieuArrivee(){
        return this.lieuArrivee;
    }

    getEtape(){
        return this.etapes;
    }

    getDuree(){
        return this.duree;
    }

    getDistance(){
        return this.distance;
    }

}