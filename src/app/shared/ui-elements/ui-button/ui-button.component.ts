import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<Event>();
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(e) {
    this.onClick.emit(e);
  }

}
