import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featurePipe'
})
export class FeaturePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
