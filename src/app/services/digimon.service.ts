import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Digimon } from '../interfaces/digimons.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DigimonService {
  cargando = true;
  digimons: any;

  constructor( private http: HttpClient ) {
    this.cargarDigimons();
  }


  private cargarDigimons(){
    this.http.get('https://digimon-api.vercel.app/api/digimon')
    .subscribe( (resp: Digimon) => {
      this.digimons = resp;
      console.log(resp);
    });
  }

} // Fin ProductosService
