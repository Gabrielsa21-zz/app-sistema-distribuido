import { WeatherComponent } from './components/weather/weather.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'weather'
  },
  {
    path: 'weather', component: WeatherComponent
  },
  {
    path: 'weather/:id', component: WeatherComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
