import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // getCurrentWeatherByCity(city) {
  //   return this.http
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=metric`
  //     )
  //     .pipe(retry(3), catchError(this.handleError));
  // }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error);
    } else {
      console.log(error.status);
    }
    return throwError('error');
  }
}
