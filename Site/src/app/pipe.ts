import { Pipe,PipeTransform  } from '@angular/core';
@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  transform(array:any, searchText: string) {
    return array.filter(item=> item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}