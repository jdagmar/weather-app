import { Component, OnInit } from '@angular/core';
import {
  WeatherService,
  Weather,
  RemoteWeather,
} from './../../services/weather.service';
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

  weather: RemoteWeather = { tag: 'not asked' };
  noCityIsFound: boolean = false;
  // TODO: save most recent searched city and use?
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
        console.log(error);
        // TODO: save and handle error
        return (this.noCityIsFound = true);
      }
    );
  }
}
