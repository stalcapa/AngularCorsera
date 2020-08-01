import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient} from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  //destinos: DestinoViaje[];
  constructor(public destinosApiClient: DestinosApiClient) {
    //this.destinos = [];
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if(d != null){
        this.updates.push('se ha elegido a ' + d.nombre);
      }
    })

   }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    
  }

  elegido(e:DestinoViaje){

    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    this.destinosApiClient.elegir(e);
    
    }
    

  
}
