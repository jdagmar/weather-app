import { Component, OnInit } from '@angular/core';
import {
  WeatherService,
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
  searchWord: string = '';
  suggestedCities = ['stockholm', 'new york', 'london', 'tokyo'];

  constructor(private weatherService: WeatherService) {
    const city = localStorage.getItem('city');

    if (city !== null) {
      this.getWeather(city);
    }
  }

  ngOnInit() {}

  getWeather(city: string) {
    if (city.length > 0) {
      this.weatherService.getCurrentWeatherByCity(city).subscribe((res) => {
        this.searchWord = this.searchForm.get('city')?.value;
        this.weather = res;

        if (this.weather.tag === 'success') {
          localStorage.setItem('city', city);
        }
      });
    }
  }
}
