import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export type Weather = {
  name: string;
  weather: {
    description: string;
    id: number;
  }[];
  main: {
    temp: number;
    feels_like: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apikey = environment.openWeatherMap.apiKey;

  constructor(private http: HttpClient) {}

  getCurrentWeatherByCity(city: string) {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apikey}&units=metric`
      )
      .pipe(
        map((res) => res as Weather),
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error);
    } else {
      console.log(error.status);
    }
    return throwError('error');
  }
}
