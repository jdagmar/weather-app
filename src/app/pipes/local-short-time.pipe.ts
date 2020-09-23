import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localShortTime',
})
export class LocalShortTimePipe implements PipeTransform {
  transform(value: Date): string {
    return value.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
