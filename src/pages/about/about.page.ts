import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductRequestService } from '../../common/services/product-request.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.page.html',
    providers: [
    ],
    styleUrl: './about.page.html'
})
export class AboutPage {

}
