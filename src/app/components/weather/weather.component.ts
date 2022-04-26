import { ILatitudeLongitude } from '../../models/weather.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

  public weatherData!: any;
  public dateTime!: string;

  constructor(
    private _activeRouter: ActivatedRoute,
    private _WeatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this._getLatitudeLogitude();
    this._getCurrencyDateTime();
  }

  private _getLatitudeLogitude() {
    this._activeRouter.queryParams.subscribe((value: any) => {
      this._getCurrencyWeather(value);
    });
  }

  private _getCurrencyWeather(value: ILatitudeLongitude) {
    if (value.latitude && value.longitude) {
      this._WeatherService.getCurrencyWeather(value).subscribe((value: any) => {
        this.weatherData = value.data[0];
      }, error => {
        console.error('error', error);
      });
    }
  }

  private _getCurrencyDateTime() {
    moment.locale("pt-br");
    this.dateTime = moment().format("dddd, D MMMM YYYY, H:mm");
  }
}
