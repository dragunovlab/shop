import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, RouterOutlet, FooterComponent],
    templateUrl: './layout.page.html',
    styleUrl: './layout.page.scss'
})
export class LayoutPage {

}
