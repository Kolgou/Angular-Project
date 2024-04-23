import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { AProposComponent } from './a-propos/a-propos.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: AProposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
