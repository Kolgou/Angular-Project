import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SortByNamePipe } from './sort-by-name.pipe';
import { SortByPricePipe } from './sort-by-price.pipe';
import { AProposComponent } from './a-propos/a-propos.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SortByNamePipe,
    SortByPricePipe,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
