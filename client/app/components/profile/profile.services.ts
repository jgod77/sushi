import { AuthHttp } from 'angular2-jwt';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';


@Injectable()
export class ProfileService {
  constructor(private authHttp: AuthHttp, private http: Http) {}

  getProfileInfo(url){
    return this.http.get('http://localhost:1337/api/profile/' + url)
      .map(res => res.json());
  }

  getProjects(userId){
    return this.http.get('http://localhost:1337/api/project/user/' + userId)
      .map(res => res.json());
  }

  updateUserProfile(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp.put('http://localhost:1337/api/user/edit', data, options)
      .map(res => res.json())
  }

  addTech(tech) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.authHttp.post('http://localhost:1337/api/profile/addTech', JSON.stringify(tech), options)
      .map(res => res.json());
  }

  deleteTech(techId) {
    return this.authHttp.delete('http://localhost:1337/api/profile/removeTech/' +  techId)
      .map(res => res);
  }
}
