import { ILatitudeLongitude } from './../models/weather.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  getCurrencyWeather(latAndLong: ILatitudeLongitude) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };  
    return this._http.get(`http://api.weatherbit.io/v2.0/current?lat=${latAndLong.latitude}&lon=${latAndLong.longitude}&key=96e6768d2b76496994d4e927cd59ff54`, httpOptions);
  }
}