import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], reverse: boolean = false): any[] {
    if (!products || products.length === 0) {
      return [];
    }

    let sortedProducts = products.sort((a, b) => a.price - b.price);

    if (reverse) {
      sortedProducts = sortedProducts.reverse();
    }

    return sortedProducts;
  }
}
