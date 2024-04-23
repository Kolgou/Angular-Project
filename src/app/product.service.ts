import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {id: 1, nom: 'Astérix et Obélix', price: '50', image: '../assets/img/asterix-et-obelix-en-legionnaires.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem tortor. Aliquam a quam sollicitudin, rutrum nibh et, luctus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat finibus odio, quis venenatis erat aliquam nec. Etiam ac ligula malesuada, consequat est ut, tincidunt justo. Nulla egestas, ante nec aliquam vestibulum, nisi lectus laoreet turpis, sed ultricies nisl lacus et velit. Aliquam sed ex facilisis, consequat quam imperdiet, interdum lectus. In placerat nibh placerat condimentum dictum. Vivamus laoreet ex eget quam vehicula hendrerit', theme: 'Astérix et Obélix', couleur: 'multicolor', materiaux: '	Polychlorure de vinyle', personnage: 'Astérix et Obélix', assemblage:'Non', agemin: '36', pile: 'Non'},
    {id: 2, nom: 'Astérix', price: '40', image: '../assets/img/astérix.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem tortor. Aliquam a quam sollicitudin, rutrum nibh et, luctus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat finibus odio, quis venenatis erat aliquam nec. Etiam ac ligula malesuada, consequat est ut, tincidunt justo. Nulla egestas, ante nec aliquam vestibulum, nisi lectus laoreet turpis, sed ultricies nisl lacus et velit. Aliquam sed ex facilisis, consequat quam imperdiet, interdum lectus. In placerat nibh placerat condimentum dictum. Vivamus laoreet ex eget quam vehicula hendrerit', theme: 'Astérix et Obélix', couleur: 'multicolor', materiaux: '	Polychlorure de vinyle', personnage: 'Astérix', assemblage:'Non', agemin: '36', pile: 'Non'},
    {id: 3, nom: 'Abracoudrix', price: '70', image: '../assets/img/Jouets-Asterix-et-Obelix-Figurine-Asterix-et-Obelix---Abraracourcix-l.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et sem tortor. Aliquam a quam sollicitudin, rutrum nibh et, luctus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat finibus odio, quis venenatis erat aliquam nec. Etiam ac ligula malesuada, consequat est ut, tincidunt justo. Nulla egestas, ante nec aliquam vestibulum, nisi lectus laoreet turpis, sed ultricies nisl lacus et velit. Aliquam sed ex facilisis, consequat quam imperdiet, interdum lectus. In placerat nibh placerat condimentum dictum. Vivamus laoreet ex eget quam vehicula hendrerit', theme: 'Astérix et Obélix', couleur: 'multicolor', materiaux: '	Polychlorure de vinyle', personnage: 'Abracoudrix', assemblage:'Non', agemin: '36', pile: 'Non'},]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProductsById(id : number){
    return this.products.find(product => product.id === id)
  }
}
