import {Component, inject} from '@angular/core';
import {TelegramService} from '../../services/telegram.service';
import {ProductsService} from '../../services/products.service';
import {ProjectListComponent} from '../../components/project-list/project-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProjectListComponent],
  template: `<app-project-list title="Web development"
                               subtitle="My github projects are related to the creation of websites and web applications"
                               [products]="products.byGroup['web']"></app-project-list>
  <app-project-list title="Website layout"
                    subtitle="My github projects are related to adaptive website layout"
                    [products]="products.byGroup['layout']"></app-project-list>
  <app-project-list title="js/ts development"
                    subtitle="My github projects related to various javascript or typescript programs"
                    [products]="products.byGroup['other']"></app-project-list>`
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);
  constructor() {
    this.telegram.BackButton.hide();
    console.log(this.products.byGroup)
  }
}
