import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INavigation } from '../../common/interfaces/navigation.interface';
import { headerNavigationList } from '../../common/consts/header-navigation';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {

    public headerList: INavigation[] = headerNavigationList;
}
