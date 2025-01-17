import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct, ProductsService} from '../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TelegramService} from '../../services/telegram.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `<div class="centered">
    <h2 class="mb">{{product.title}}</h2>
    <br />
    <img [src]="product.image" [alt]="product.title">
    <p class="hint">{{product.text}}</p>
    <a [href]="product.link" target="_blank">View the project</a>
  </div>`
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(private products: ProductsService,
              private telegram: TelegramService,
              private router: Router,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id);
    this.goBack = this.goBack.bind(this);
  }


  goBack(){
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
        this.telegram.BackButton.show();
        this.telegram.BackButton.onClick(this.goBack)
  }
  ngOnDestroy(): void {
    this.telegram.BackButton.offClick(this.goBack)
  }

}
