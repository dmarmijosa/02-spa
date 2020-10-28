import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  constructor(private activadeRoute:ActivatedRoute,
              private router:Router,
              private _heroesService:HeroesService) { 
    
  }

  ngOnInit(): void {
    this.activadeRoute.params.subscribe(params=>{
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);  
    });
  }

  

}
