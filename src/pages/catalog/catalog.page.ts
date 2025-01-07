import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRequestService } from '../../common/services/product-request.service';
import { IProduct } from '../../common/interfaces/product.interface';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './catalog.page.html',
    styleUrl: './catalog.page.scss',
    providers: [
        ProductRequestService
    ]
})
export class CatalogPage {

    protected readonly list$!: Observable<IProduct[]>

    constructor(
        @Inject(ProductRequestService) protected readonly productRequestService: ProductRequestService,
    ) {
        this.list$ = this.productRequestService.getProductList();
    }
}
