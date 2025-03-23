import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../common/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: IProduct

  @Output() addCartEvent: EventEmitter<IProduct> =  new EventEmitter()

  public addCart(card: IProduct): void {
     this.addCartEvent.emit(card)
  }

}


// https://metanit.com/web/typescript/3.3.php