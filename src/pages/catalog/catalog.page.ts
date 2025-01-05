import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './catalog.page.html',
    styleUrl: './catalog.page.scss'
})
export class CatalogPage {

    // public list$: Observable<IInterface[]>

    // constructor(
    //     @Inject(RequestProductService) protected readonly requestProductService: RequestProductService
    // ) {
    //     this.list$ = this.requestProductService.getProducts();
    // }
    

}
