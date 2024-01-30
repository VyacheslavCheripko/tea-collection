import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goodDescriptionPipe'
})
export class GoodDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return (value.length < 100) ? value : value.substring(0, 100) + '...';
  }

}
