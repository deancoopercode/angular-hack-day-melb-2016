import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getName() {
        return 'Duncan Hunter';
    }

    getDuncan() {
        return this.http.get('https://api.github.com/users/duncanhunter')
            .map(data => data.json());

    }
}