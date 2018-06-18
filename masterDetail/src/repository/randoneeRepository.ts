import { DataProvider } from './../providers/data/data';
import { Randonee } from '../model/randoneeModel'
import { LieuRepository } from '../repository/lieuRepository'
import { Injectable } from '@angular/core';


@Injectable()
export class RandoneeRepository{

    private randonees: Array<Randonee>

    constructor(public lr:LieuRepository, public data:DataProvider ){
        this.randonees = new Array();
        this.randonees.push(new Randonee(lr.getByIndex(0),lr.getByIndex(1),[lr.getByIndex(2)],1600,72));
        this.randonees.push(new Randonee(lr.getByIndex(2),lr.getByIndex(3),[],160,12));
        this.randonees.push(new Randonee(lr.getByIndex(4),lr.getByIndex(5),[lr.getByIndex(0),lr.getByIndex(1),lr.getByIndex(2),lr.getByIndex(3)],70,10));
        
        data.getData().subscribe(randos => {
            randos.forEach(rand => {
              this.randonees.push(rand);
            });
        });
    }

    public getall(){
        return this.randonees;
    }
}