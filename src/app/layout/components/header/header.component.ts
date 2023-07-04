import { Component, OnInit } from '@angular/core';
import { HeaderNavList, HeaderSocials } from '../../services/header/header';
import { HeaderService } from '../../services/header/header.service';
import { CategoryModel } from '../../services/header/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerNavList: HeaderNavList[] = [];
  public headerSocialList: HeaderSocials[] = [];
  public headerCategoryList: CategoryModel[] = [];

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerNavList = headerService.headerNavList; // список nav
    this.headerSocialList = headerService.headerSocialList; // список social
    this.headerCategoryList = headerService.mainNavList; // список категорий
  }

  ngOnInit(): void {
  }

  public onButtonClick(e) {
    console.log(e);
  }

}
