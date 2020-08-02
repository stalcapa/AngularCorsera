import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient} from '../models/destinos-api-client.model';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;
  //destinos: DestinoViaje[];
//  constructor(public destinosApiClient: DestinosApiClient) {
  constructor(public destinosApiClient: DestinosApiClient, public store: Store<AppState>) {
    //this.destinos = [];
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito)
    .subscribe(d => {
      if (d != null ) {
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
    });
    store.select(state => state.destinos.items).subscribe(items => this.all = items);
  }

    //Observable
    /*
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if(d != null){
        this.updates.push('se ha elegido a ' + d.nombre);
      }
    })

   }
*/
  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
   // this.store.dispatch(new NuevoDestinoAction(d));
    
  }

  elegido(e: DestinoViaje){

    //this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    //this.destinosApiClient.elegir(e);
    this.destinosApiClient.elegir(e);
   // this.store.dispatch(new ElegidoFavoritoAction(e));
    }

    getAll(){

    }
}
