import { Injectable } from '@angular/core';
import { HeaderNavList, HeaderSocials } from './header';
import { CategoryModel } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  get headerNavList(): HeaderNavList[] {
    return [
      { text: 'О нас', link: '#' },
      { text: 'Доставка', link: '#' },
      { text: 'Оплата', link: '#' },
      { text: 'Как оформить', link: '#' },
      { text: 'Доставка', link: '#' },
      { text: 'Контакты', link: '#' },
      { text: 'АКЦИИ', link: '#' },
    ];
  }

  get headerSocialList(): HeaderSocials[] {
    return [
      { link: '#', name: 'vk' },
      { link: '#', name: 'ok' },
      { link: '#', name: 'telegram' },
      { link: '#', name: 'viber' },
      { link: '#', name: 'youtube' },
    ];
  }

  get mainNavList(): CategoryModel[] {
    return [
      { categoryId: '1', name: 'Семена', previewUri: '', link: '#', children: [
          { categoryId: '9', name: 'Семена', link: '#' },
          { categoryId: '10', name: 'Цветы', link: '#' },
          { categoryId: '11', name: 'Ягоды, фрукты', link: '#' },
          { categoryId: '12', name: 'Зелень, пряности', link: '#' },
          { categoryId: '13', name: 'Газонные травы', link: '#' },
          { categoryId: '14', name: 'Лекарственные травы', link: '#' },
          { categoryId: '15', name: 'Семена', link: '#' },
          { categoryId: '16', name: 'Семена', link: '#' },
        ]
      },
      { categoryId: '2', name: 'Саженцы', previewUri: '', link: '#', children: [
          { categoryId: '17', name: 'Плодовые', link: '#' },
          { categoryId: '18', name: 'Декоративные', link: '#' },
        ]
      },
      { categoryId: '3', name: 'Земляника', previewUri: '', link: '#', children: null},
      { categoryId: '4', name: 'Розы', previewUri: '', link: '#', children: [
          { categoryId: '19', name: 'Чайно-гибридные', link: '#' },
        ]
      },
      { categoryId: '5', name: 'Луковичные и многолетники', previewUri: '', link: '#', children: [
          { categoryId: '20', name: 'Анемона', link: '#' },
          { categoryId: '21', name: 'Астильба', link: '#' },
          { categoryId: '22', name: 'Астра', link: '#' },
          { categoryId: '23', name: 'Гиацинт', link: '#' },
          { categoryId: '24', name: 'Ирис', link: '#' },
          { categoryId: '25', name: 'Крокус', link: '#' },
          { categoryId: '26', name: 'Лилейник', link: '#' },
          { categoryId: '27', name: 'Лилия', link: '#' },
          { categoryId: '28', name: 'Мускари', link: '#' },
          { categoryId: '29', name: 'Нарцисс', link: '#' },
          { categoryId: '30', name: 'Хоста', link: '#' },
        ]
      },
      { categoryId: '6', name: 'Инвентарь', previewUri: '', link: '#',  children: [
          { categoryId: '31', name: 'Электроинструмент', link: '#' },
          { categoryId: '32', name: 'Инструмент', link: '#' },
          { categoryId: '33', name: 'Все для рассады', link: '#' },
          { categoryId: '34', name: 'Для выращивания микрозелени', link: '#' },
          { categoryId: '35', name: 'Все для полива', link: '#' },
          { categoryId: '36', name: 'Декор для сада', link: '#' },
        ]
      },
      { categoryId: '7', name: 'Удорения и агрохимия', previewUri: '', link: '#', children: [
          { categoryId: '37', name: 'Регуляторы роста', link: '#' },
          { categoryId: '38', name: 'Сидераты, медоносы', link: '#' },
          { categoryId: '39', name: 'От сорняков', link: '#' },
          { categoryId: '40', name: 'От вредителей', link: '#' },
          { categoryId: '41', name: 'От болезней', link: '#' },
          { categoryId: '42', name: 'От грызунов', link: '#' },
        ]
      },
      { categoryId: '8', name: 'Грунты и субстраты', previewUri: '', link: '#', children: null },
    ];
  }
}
