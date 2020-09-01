import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-snow',
  templateUrl: './icon-snow.component.html',
  styleUrls: ['./icon-snow.component.scss'],
})
export class IconSnowComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
