import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-rain',
  templateUrl: './icon-rain.component.html',
  styleUrls: ['./icon-rain.component.scss'],
})
export class IconRainComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
