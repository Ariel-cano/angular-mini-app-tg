import {Component, Input} from '@angular/core';
import {IProduct} from '../../services/products.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink],
  template:
    `<h2 class="mb">{{title}}</h2>
     <h4 class="mb">{{subtitle}}</h4>
    <ul class="products">
      @for (product of products; track product.id) {
        <li class="product-item" [routerLink]="'/product/' + product.id" >
          <div class="product-image">
            <img [src]="product.image" [alt]="product.title">
          </div>
          <div class="product-info">
            <h3>{{product.title}}</h3>
            <p class="hint">{{product.text}}</p>
          </div>
        </li>
      }
    </ul>`
})
export class ProjectListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}
