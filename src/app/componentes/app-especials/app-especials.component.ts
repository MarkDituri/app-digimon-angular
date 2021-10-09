import { Component, OnInit } from '@angular/core';

import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-especials',
  templateUrl: './app-especials.component.html',
  styleUrls: ['./app-especials.component.css']
})
export class AppEspecials implements OnInit {
  startPage:any;
  paginationLimit:any;

  constructor(public digimonSerice: DigimonService) {
    this.startPage = 0;
    this.paginationLimit = 3;
  }
  showMoreItems(){
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }
  showLessItems(){
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }
  ngOnInit(): void {
  }

}
