import { Component, OnInit } from '@angular/core';
//import the Hero class
import { Hero} from '../hero';
//import the Mock-heroes class
//import { HEROES } from '../mock-heroes';

import {HeroService } from '../hero.service'
//import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {

  // called heroes to expose hero array for binding
    heroes : Hero[];
    selectedHero:Hero;

 // hero = 'Windstorm';  
 /*Add a private heroService parameter of type HeroService to the constructor and 
   //parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site..*/
  constructor(private heroService : HeroService) {
    
   }

  ngOnInit() {

   this.getHeroes();
     
  }
  
//   OnSelect(hero : Hero): void{
//     this.selectedHero = hero;
// }

//a function to retrieve the heroes from the service.
 getHeroes(): void {
   this.heroService.getHeroes()
       .subscribe(heroes => this.heroes = heroes);
 }
  

}
