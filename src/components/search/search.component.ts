import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSearchService } from '../../common/services/product-search.service';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
     
    protected readonly productSearchService: ProductSearchService = inject(ProductSearchService);
    public searchActive: boolean = false;

    public toggleSearch() {
        this.searchActive = !this.searchActive;
    }
}
