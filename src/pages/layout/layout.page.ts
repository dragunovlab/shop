import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductRequestService } from '../../common/services/product-request.service';
import { ProductSearchService } from '../../common/services/product-search.service';



@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, BannerComponent, RouterOutlet, FooterComponent],
    templateUrl: './layout.page.html',
    providers: [
        ProductRequestService,
        ProductSearchService
    ],
    styleUrl: './layout.page.scss'
})
export class LayoutPage {

}
