import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-atmosphere',
  templateUrl: './icon-atmosphere.component.html',
  styleUrls: ['./icon-atmosphere.component.scss'],
})
export class IconAtmosphereComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
