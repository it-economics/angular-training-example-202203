import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quotationMark'
})
export class QuotationMarkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value ? value.replace(/&quot;/g, '"') : value;
  }

}
