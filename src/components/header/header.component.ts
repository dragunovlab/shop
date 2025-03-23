import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { INavigation } from '../../common/interfaces/navigation.interface';
import { headerNavigationList } from '../../common/consts/header-navigation';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, SearchComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'], 
    changeDetection: ChangeDetectionStrategy.OnPush // Добавлено для повышения производительности
})
export class HeaderComponent {
    public headerList: INavigation[] = headerNavigationList;
}
