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


  constructor() {
    
  }

}

// ДЗ!
// 1) сверстать карточку товара +
// 2) разобраться как работает searchPipe (бонус) +-
// 3) доделать верстку баннера +
// 4)Добавить loader -
// 5)Одинаковые по высоте карточки -
// 6)Вывести картинку +
// 7) Контакты Корзина сделать страницы - 