import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-drizzle',
  templateUrl: './icon-drizzle.component.html',
  styleUrls: ['./icon-drizzle.component.scss'],
})
export class IconDrizzleComponent implements OnInit {
  @Input() showMoon!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
