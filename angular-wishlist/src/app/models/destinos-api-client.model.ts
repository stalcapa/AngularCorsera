import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject} from 'rxjs';
import { Store} from '@ngrx/store';
import { AppState} from '../app.module';
import { DestinosViajesState, NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';
import { tap, last } from 'rxjs/operators';
import { Action } from '@ngrx/store';


@Injectable() 
export class DestinosApiClient {
 //   destinos: DestinoViaje[];
   // current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);

    constructor(private store: Store<AppState>){
     //   this.destinos = [];
    }

    add(d: DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d));
      //  this.destinos.push(d);
    }

   // getAll(): DestinoViaje[]{
    //    return this.destinos;
   // }

   /* getById(id: string): DestinoViaje{
        return this.destinos.filter(function(d) {return d.id.toString() === id; })[0];
    }
*/
    elegir(d: DestinoViaje){
        this.store.dispatch(new ElegidoFavoritoAction(d));
        
        /*
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
        */
    }
/*
    subscribeOnChange(fn){
        this.current.subscribe(fn);
    }
*/
}