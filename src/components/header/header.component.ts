import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { INavigation } from '../../common/interfaces/navigation.interface';
import { headerNavigationList } from '../../common/consts/header-navigation';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {

    public headerList: INavigation[] = headerNavigationList;

    public goBack(): void {
        history.back();
    }
}
