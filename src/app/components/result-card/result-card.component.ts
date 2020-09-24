import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/services/weather.service';

const setIconName = (name: string, isAfterSunset: Boolean) =>
  isAfterSunset ? `${name}-moon` : `${name}-sun`;

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent {
  @Input() set result(result: Weather) {
    this.result_ = result;
    const iconCode = result.type === 800 ? 9 : Math.floor(result.type / 100);
    const isAfterSunset = Date.now() > result.sunsetAt.getTime();

    switch (iconCode) {
      case 2:
        this.iconName = setIconName('thunderstorm', isAfterSunset);
        break;
      case 3:
        this.iconName = setIconName('drizzle', isAfterSunset);
        break;
      case 5:
        this.iconName = setIconName('rain', isAfterSunset);
        break;
      case 6:
        this.iconName = setIconName('snow', isAfterSunset);
        break;
      case 7:
        this.iconName = setIconName('atmosphere', isAfterSunset);
        break;
      case 8:
        this.iconName = setIconName('clouds', isAfterSunset);
        break;
      default:
        this.iconName = setIconName('clear', isAfterSunset);
        break;
    }
  }
  get result(): Weather {
    return this.result_;
  }

  @Input() isResultNotFound!: boolean;

  private result_!: Weather;
  iconName = '';
}
