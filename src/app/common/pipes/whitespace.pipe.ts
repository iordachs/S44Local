import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitespace',
  standalone: true,
})
export class WhitespacePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.replace(/\s+/g, '');
  }
}
