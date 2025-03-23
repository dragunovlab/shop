import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-search',
  standalone: true,
      imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    searchQuery: string = '';  
    searchActive: boolean = false;

    toggleSearch() {
        this.searchActive = !this.searchActive;
    }
}
