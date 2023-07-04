import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-columns',
  templateUrl: './footer-columns.component.html',
  styleUrls: ['./footer-columns.component.scss']
})
export class FooterColumnsComponent implements OnInit {
  @Input() textTransform: 'uppercase' | null;

  constructor() { }

  ngOnInit(): void {
  }

}
