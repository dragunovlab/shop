import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith, switchMap, tap } from 'rxjs';
import { IProduct } from '../../common/interfaces/product.interface';
import { ProductRequestService } from '../../common/services/product-request.service';
import { SearchPipe } from '../../common/pipes/search.pipe';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, SearchPipe, ReactiveFormsModule],
    templateUrl: './catalog.page.html',
    styleUrl: './catalog.page.scss',
    providers: [
        ProductRequestService
    ]
})
export class CatalogPage implements OnInit {

    protected list$!: Observable<IProduct[]>
    protected readonly search: FormControl = new FormControl('');

    constructor(
        @Inject(ProductRequestService) protected readonly productRequestService: ProductRequestService,
    ) {
    }

    public ngOnInit(): void {
        this.list$ = this.productRequestService.getProductList()
            .pipe(
                switchMap(products => this.filterProduct(products))
            );
    }

    public filterProduct(products: IProduct[]): Observable<IProduct[]> {
        return this.search.valueChanges
            .pipe(
                startWith(''),
                map(value => {
                    if (!value) {
                        return products;
                    }

                    return products.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
                })
            )
    }
}
