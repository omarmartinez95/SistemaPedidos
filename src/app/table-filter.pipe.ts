import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], Id: string) {
  

    return Id ? list.filter(item => item.Id === Id) : list;
  }

}
