import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  transform(value: number | undefined): string {
    return value ? value + " °C" : "";
  }
}
