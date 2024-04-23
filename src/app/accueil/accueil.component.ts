import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { SortByNamePipe } from '../sort-by-name.pipe';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  products: any[] = []; // Assurez-vous de déclarer le tableau

  reverseSort: boolean = false;

  toggleSort() {
    this.reverseSort = !this.reverseSort;
  }

  searchTerm: string = '';
  
  updateSearchTerm(event: any) {
    this.searchTerm = event.target.value;
  }

  constructor(private router : Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts(); // Utilisez le service pour récupérer les noms
  }

  goToProductsDetail(productId: number){
    this.router.navigate(['/produits', productId]);


}
}
