import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 
}

// ДЗ!
// 1) сверстать карточку товара
// 2) кнопка назад
// 3) разобраться как работает searchPipe (бонус)
// 4) доделать верстку баннера