import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};
  casa: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService
               ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe( params['id'] );
      if ( this.casa === 'DC' ) {
        this.casa = 'assets/img/dc.jpg';
      } else if ( this.casa === 'Marvel' ) {
        this.casa = 'assets/img/marvel.jpg';
      }
      console.log(this.heroe);
    } );
  }

}
