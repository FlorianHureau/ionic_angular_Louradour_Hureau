import { Lieu } from '../model/lieuModel'
import { Injectable } from '@angular/core';

@Injectable()
export class LieuRepository{

    private lieux:Array<Lieu>;

    constructor(){
        this.lieux = new Array();
        this.lieux.push(new Lieu("Marseille","26 rue de la république",43.30,5.37));
        this.lieux.push(new Lieu("Paris","99 rue Rivoli",48.86,2.33));
        this.lieux.push(new Lieu("Nice","85 Route de Saint-Antoine",43.70,7.23));
        this.lieux.push(new Lieu("Tulle","5 Chemin du stade",45.28,1.78));
        this.lieux.push(new Lieu("Clermont-Ferrand","14 Rue Grande Combaude",45.80,3.12));
        this.lieux.push(new Lieu("Giat","2 Rue Joseph Labas",45.80,2.47));
    }

    public getByIndex(index:number){
        return this.lieux[index];
    }
}