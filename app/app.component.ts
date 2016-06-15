/**
 * Created by Panos on 15-Jun-16.
 */
import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
