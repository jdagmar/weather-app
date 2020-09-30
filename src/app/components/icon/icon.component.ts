import { Component, Input, OnInit } from '@angular/core';
import iconsSvg from './icons.svg';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() name!: string;
  @Input() cssClass!: string;
  href = '';

  constructor() {}

  ngOnInit(): void {
    console.log(iconsSvg);
    this.href = `${iconsSvg}#${this.name}`;
  }
}
