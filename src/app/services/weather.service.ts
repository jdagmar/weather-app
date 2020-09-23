import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

type WeatherResponse = {
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

export type Weather = {
  city: string;
  description: string;
  type: number;
  temp: number;
  tempFeelsLike: number;
  sunriseAt: Date;
  sunsetAt: Date;
};

const toWeather = (res: WeatherResponse): Weather => {
  const firstWeather = res.weather[0] ?? {
    description: 'no description available',
    id: 0,
  };

  return {
    city: res.name,
    description: firstWeather.description,
    type: firstWeather.id,
    temp: res.main.temp,
    tempFeelsLike: res.main.feels_like,
    sunriseAt: new Date(res.sys.sunrise * 1000),
    sunsetAt: new Date(res.sys.sunset * 1000),
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
        map((res) => res as WeatherResponse),
        retry(3),
        map(toWeather),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse | Error) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof Error) {
        return throwError(error.error.message);
      } else {
        return throwError(error.status + ': ' + error.message);
      }
    } else if (error instanceof Error) {
      return throwError(error.message);
    } else {
      return throwError('something bad happend');
    }
  }
}
