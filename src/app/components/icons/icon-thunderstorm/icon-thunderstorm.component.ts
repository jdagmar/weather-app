import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-thunderstorm',
  templateUrl: './icon-thunderstorm.component.html',
  styleUrls: ['./icon-thunderstorm.component.scss'],
})
export class IconThunderstormComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
