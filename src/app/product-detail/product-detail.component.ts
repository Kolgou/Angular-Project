import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        console.log(params); // Vérifiez le contenu des paramètres
        const productId = Number(params.get('id'));
        console.log(productId); // Vérifiez l'ID obtenu
        this.product = this.productService.getProductsById(productId);
      });
    }
}
