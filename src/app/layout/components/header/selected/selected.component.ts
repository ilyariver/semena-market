import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  @Input() text: 'Избранное' | 'Корзина' = 'Избранное';
  @Input() count: number;
  @Input() sum: number;

  constructor() { }

  ngOnInit(): void {
  }

}
