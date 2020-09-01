import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-clouds',
  templateUrl: './icon-clouds.component.html',
  styleUrls: ['./icon-clouds.component.scss'],
})
export class IconCloudsComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
