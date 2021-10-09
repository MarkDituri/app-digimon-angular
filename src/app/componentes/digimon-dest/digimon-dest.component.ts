import { Component, OnInit } from '@angular/core';

import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'Digimon-dest',
  templateUrl: './digimon-dest.component.html',
  styleUrls: ['./digimon-dest.component.css']
})
export class DigimonDest implements OnInit {
  constructor(public digimonSerice: DigimonService ) { }

  ngOnInit(): void {
  }


}
