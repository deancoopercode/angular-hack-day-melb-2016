import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    template: `
            Name: <input [(ngModel)]="name">
            {{name}}
            <app-home (onClick)="logMe($event)" [name]="name"></app-home>


            <a routerLink="/">Home</a>
            <a routerLink="/user">User</a>
            <router-outlet></router-outlet>   
    `
})
export class AppComponent implements OnInit {
    name: string = 'Duncan';

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getName();
        console.log('called ngOnInit');
    }

    getName() {
        this.name = this.appService.getName();
    }

    logMe(name: string) {
        console.log(name)
    }

}