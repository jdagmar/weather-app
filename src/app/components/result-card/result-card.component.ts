import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/services/weather.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  @Input() set result(result: Weather) {
    this.result_ = result;
    this.iconCode = result.type === 800 ? 9 : Math.floor(result.type / 100);
    this.isAfterSunset = Date.now() > result.sunsetAt.getTime();
  }
  get result(): Weather {
    return this.result_;
  }

  @Input() isResultNotFound!: boolean;

  private result_!: Weather;
  iconCode = 0;
  isAfterSunset = false;
}
