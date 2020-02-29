import { PaginationComponent } from './pagination.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value && args) {
      const paginationComponent = args[1] as PaginationComponent;
      const pageSize = 10;
      const start = (paginationComponent.page - 1) * paginationComponent.pageSize;
      const end = (paginationComponent.page - 1) * paginationComponent.pageSize + paginationComponent.pageSize;
      return value.slice(start, end);
    }
    return value;
  }

}
