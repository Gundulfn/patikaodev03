import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullReplace'
})
export class NullReplacePipe implements PipeTransform {

  replaceText: String = "Unknown";

  transform(value: any): any {
    console.log(value, typeof value);
    if (value === 'null') {
      return this.replaceText;
    }

    return value;
  }
}
