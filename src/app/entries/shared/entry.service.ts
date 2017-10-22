import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EntryService {

  getEntries(): Promise<Entry[]> {
    return this.http.get('/app/entries')
      .toPromise()
      .then(response => response.json() as Entry[]);
  }

  constructor(private http: Http) { }

}
