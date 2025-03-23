import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith, switchMap, tap } from 'rxjs';
import { IProduct } from '../../common/interfaces/product.interface';
import { ProductRequestService } from '../../common/services/product-request.service';
import { SearchPipe } from '../../common/pipes/search.pipe';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductSearchService } from '../../common/services/product-search.service';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, SearchPipe, ReactiveFormsModule, ProductCardComponent],
    templateUrl: './catalog.page.html',
    styleUrl: './catalog.page.scss',
    providers: [
        ProductRequestService
    ]
})
export class CatalogPage implements OnInit {
    
    protected list$!: Observable<IProduct[]>
    protected readonly search: FormControl = new FormControl('');

    public title: string = '';

    constructor(
        @Inject(ProductRequestService) protected readonly productRequestService: ProductRequestService,
        @Inject(Router) protected readonly router: Router,
        @Inject(ProductSearchService) protected readonly productSearchService: ProductSearchService
    ) {
    }

    public ngOnInit(): void {
        this.list$ = this.productRequestService.getProductList();
    }

    // public filterProduct(products: IProduct[]): Observable<IProduct[]> {
    //     return this.search.valueChanges
    //         .pipe(
    //             startWith(''),
    //             map(value => {
    //                 if (!value) {
    //                     return products;
    //                 }

    //                 return products.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    //             })
    //         )
    // }

    public navigateToDetail(id: number): void {
        this.router.navigate([`catalog/${id}`]);
    }

    public keyGetter(product: IProduct): string {
        return product.title;
    }

    public addCart(product: IProduct): void {
        console.log(product)
    }
}
