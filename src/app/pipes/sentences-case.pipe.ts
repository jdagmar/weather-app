import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencesCase',
})
export class SentencesCasePipe implements PipeTransform {
  transform(value: string): string {
    return value[0].toUpperCase() + value.slice(1);
  }
}
