import { Pipe, PipeTransform } from '@angular/core';

/**
 * Trunc the string value and add ...
 * Usage :
 *   Value | trunc:length
 * Example:
 *   Machaine | trunc:3
 *   Mac...
 */
@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.length > length ? value.substr(0, length) + '...' : value;
  }
}
