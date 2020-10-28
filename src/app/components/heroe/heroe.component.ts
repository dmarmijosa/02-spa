import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any={};

  constructor(private activateRoute:ActivatedRoute, private _heroesService: HeroesService) {
    this.activateRoute.params.subscribe(params=>{
      //console.log(params['id']);
      console.log(this.heroe);
      this.heroe=this._heroesService.getheroe(params['id']);

    });
   }

  

}
