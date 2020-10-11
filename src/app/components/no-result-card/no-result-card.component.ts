import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-result-card',
  templateUrl: './no-result-card.component.html',
  styleUrls: ['./no-result-card.component.scss'],
})
export class NoResultCardComponent {
  @Input() city!: string;
}
