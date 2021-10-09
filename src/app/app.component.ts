import { Component } from '@angular/core';
import { DigimonService } from './services/digimon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public digimonSerice: DigimonService) {

  }
  title = 'app-digimon';
}
