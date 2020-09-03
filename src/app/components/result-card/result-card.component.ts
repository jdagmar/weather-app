import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Weather } from 'src/app/services/weather.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
})
export class ResultCardComponent implements OnInit {
  constructor() {}

  @Input() result!: Weather | undefined;
  @Input() isResultNotFound!: boolean;
  @Input() isAfterSunset!: boolean;

  iconCode: number | undefined = 0;

  ngOnInit(): void {
    this.iconCode = this.result?.weather[0].id;
  }
}
