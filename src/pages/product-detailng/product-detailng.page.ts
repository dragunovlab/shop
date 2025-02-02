import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRequestService } from '../../common/services/product-request.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../common/interfaces/product.interface';

@Component({
  selector: 'app-product-detailng',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-detailng.page.html',
  styleUrl: './product-detailng.page.scss'
})
export class ProductDetailngPage implements OnInit {

  protected product$!: Observable<IProduct>;

  constructor(
    @Inject(ActivatedRoute) protected readonly activatedRoute: ActivatedRoute,
    @Inject(ProductRequestService) protected readonly productRequestService: ProductRequestService
  ) {

  }

  public ngOnInit(): void {
    this.product$ = this.productRequestService.getProductById(this.activatedRoute.snapshot.params['id'])
  }

  public goBack(): void {
    history.back();
  }
}