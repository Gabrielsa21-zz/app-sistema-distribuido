import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(value => {
      this._router.navigate(['/weather'], { queryParams: { latitude: value?.coords.latitude, longitude: value?.coords.longitude} });
    });
  }
}
