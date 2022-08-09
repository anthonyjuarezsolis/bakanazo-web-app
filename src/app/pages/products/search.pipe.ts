import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(languages: any[], searchInput: string): any[] {
    if (!searchInput) {
      return languages;
    }
    // searchInput = searchInput;
    console.log('jamon:', searchInput.toUpperCase());
    console.log(
      'jamon2:',
      languages.filter((x) => x.name.includes(searchInput.toUpperCase()))
    );
    return languages.filter((x) => x.name.includes(searchInput));
  }
}
