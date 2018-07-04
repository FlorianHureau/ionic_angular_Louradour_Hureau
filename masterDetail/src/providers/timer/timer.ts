import { Randonee } from './../../model/randoneeModel';
import { Injectable } from '@angular/core';

@Injectable()
export class TimerProvider {

    private timer;
    private rando: Randonee;

    public start(rando:Randonee){
        if(this.rando != rando){
            this.timer = Date.now();
            this.rando = rando;
        }
    }

    public refresh(){
        this.timer= Date.now();
    }

    public getTimer(){
        let time = Date.now() - this.timer;
        let x= new Date(time);
        return x;
    }
}
