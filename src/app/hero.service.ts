import { Injectable } from '@angular/core';
import {Hero } from './hero';
import { HEROES} from './mock-heroes';
// import the Observable and of symbols from RxJS.
import {observable, of, Observable} from 'rxjs';

import{MessageService} from './message.service';


/*HeroService class is going to provide an injectable service, and it can also have its own injected dependencies.
 It doesn't have any dependencies yet*/
@Injectable({
   providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }
  
  //getHeroes method to return the mock heroes.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //we replace this code of getHeroes method after import Observable
  getHero(id:number): Observable<Hero>{
    // send the message after fetching the hero
    this.messageService.add(`HeroService: fetched heroes id =${id}`);
    return of(HEROES.find(hero =>hero.id ===id)); //of(HEROES) returns an Observable<Hero[]> that produce/emit a single value, the array of mock heroes
  }

}
