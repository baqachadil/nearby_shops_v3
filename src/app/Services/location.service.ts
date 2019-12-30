import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  serverlink = "http://104.211.8.64:8086"

  getPosition()
  {
    // return new Promise((resolve, reject) => {

    //   navigator.geolocation.getCurrentPosition(resp => {

    //       resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
    //     },
    //     err => {
    //       reject(err);
    //     });
    // });

    let pos = {lat: 31.3426, lng: -8.4313}
    return pos;

  }

  setPosition(lat, lon):Observable<any>{
    let jwtToken = localStorage.getItem("JwtToken")
    console.log(jwtToken)
    return this.httpClient.post(this.serverlink+"/setLocation?lat="+lat+"&lon="+lon,null, {headers : new HttpHeaders({'authorization':jwtToken, 'Content-Type':'application/json'})})
  }
}
