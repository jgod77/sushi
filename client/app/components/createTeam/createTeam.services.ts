import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


@Injectable()
export class CreateTeamService {
  constructor(private authHttp: AuthHttp, private http: Http) {}

  createTeam(teamInfo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp.post('http://localhost:1337/api/team/create', JSON.stringify(teamInfo), options)
      .map(res => res.json);
  }
}