import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalComponent } from './functional.component';
import { Route, RouterModule } from '@angular/router';
import { PrivateDataComponent } from './components/private-data/private-data.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsResolver } from './resolvers/products.resolvers';

const routes: Route[] = [
  {
    path: '',
    component: FunctionalComponent,
    children: [
      {
        path: 'private',
        component: PrivateDataComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'products',
        component: ProductsComponent,
        resolve: { products: ProductsResolver },
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  declarations: [FunctionalComponent, PrivateDataComponent, ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
})
export class FunctionalModule {}
