import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/services/weather.service';

const formatTime = (time: number | undefined): string =>
  time !== undefined
    ? new Date(time * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  constructor() {}

  @Input() set result(result: Weather | undefined) {
    this.currentResult = result;
    this.iconCode = result?.weather[0].id ?? 0;
    this.sunriseDate = formatTime(result?.sys?.sunrise);

    const sunset = result?.sys?.sunset;
    this.sunsetDate = formatTime(sunset);

    const currentTime = Date.now() / 1000;
    this.isAfterSunset = sunset !== undefined ? currentTime > sunset : false;
  }
  get result(): Weather | undefined {
    return this.currentResult;
  }

  @Input() isResultNotFound!: boolean;

  private currentResult: Weather | undefined = undefined;
  iconCode = 0;
  sunsetDate = '';
  sunriseDate = '';
  isAfterSunset = false;

  ngOnInit(): void {}
}
