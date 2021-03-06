import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';

//--
import { DestinosApiClient } from './models/destinos-api-client.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { reduce } from 'rxjs/operators';
import { DestinosViajesEffects, DestinosViajesState,  reducerDestinosViajes, intializeDestinosViajesState} from './models/destinos-viajes-state.model';
import { reduceState } from '@ngrx/store';

//routing
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:ListaDestinosComponent},
  //{path: 'destino/id', component:DestinoDetalleComponent}
  {path: 'destino', component:DestinoDetalleComponent}
];


// redux unit
export interface AppState {
  destinos: DestinosViajesState;
};
const reducers: ActionReducerMap<AppState> = {
  destinos: reducerDestinosViajes
};

let reducersInitialState = {
  destinos: intializeDestinosViajesState()
            
};


// redux fin unit

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
     FormDestinoViajeComponent,
//     NgRxStoreModule
  ],
  imports: [
    BrowserModule,
    FormsModule,                //formulario
    ReactiveFormsModule,        //formulario
    RouterModule.forRoot(routes) ,//routing
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState,
    runtimeChecks:{
      strictStateImmutability: false,
      strictActionImmutability: false,
    }
    }),
    EffectsModule.forRoot([DestinosViajesEffects] ),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    DestinosApiClient
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
