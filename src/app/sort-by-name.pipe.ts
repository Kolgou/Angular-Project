import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products;
    }
    
    return products.filter(product => {
      return product.nom.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
