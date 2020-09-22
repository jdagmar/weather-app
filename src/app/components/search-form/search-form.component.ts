import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from './../../services/weather.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    city: new FormControl(),
  });

  weather: Weather | undefined;
  noCityIsFound: boolean = false;
  city: string = 'stockholm';

  constructor(private weatherService: WeatherService) {
    this.getWeather('stockholm');
  }

  ngOnInit() {}

  getWeather(city: string) {
    this.weatherService.getCurrentWeatherByCity(city).subscribe(
      (res) => {
        this.weather = res;
        this.noCityIsFound = false;
      },
      (error) => {
        return (this.noCityIsFound = true);
      }
    );
  }
}
