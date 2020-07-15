import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from './../../services/weather.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  weather: Weather | undefined;
  noCityIsFound: boolean = false;

  constructor(private weatherService: WeatherService) {
    this.getWeather('stockholm');
  }

  ngOnInit(): void {}

  getWeather(city: string) {
    this.weatherService.getCurrentWeatherByCity(city).subscribe(
      (res) => {
        this.weather = res;
        console.log(res);
        this.noCityIsFound = false;
      },
      (error) => {
        return (this.noCityIsFound = true);
      }
    );
  }
}
