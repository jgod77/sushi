import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor (private http: Http) {} 
  getProjects(filter) { // filter.sort ('date', 'likes', 'views')
    console.log(filter)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:1337/api/project/getAll', filter, options)
      .map(res => res.json())
  }

  // filter = {
  //   tech: Array[3],
  //   title: "Sushi",
  //   user: "JGoD",
  //   status: "In Progress",
  //   openSource: "false"
  // }
}
