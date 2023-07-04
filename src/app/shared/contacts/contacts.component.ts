import { Component, Input, OnInit } from '@angular/core';
import { isArray } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() theme: 'color' | 'default' = 'default';
  @Input() contacts: string | [string, string];

  public textFirst: string;
  public textSecond: string;
  public telMinimized: string;

  constructor() { }

  ngOnInit(): void {
    if (isArray(this.contacts)) {
      this.textFirst = this.contacts[0];
      this.textSecond = this.contacts[1];
    }
    if (typeof this.contacts === 'string') {
      const textSplit = this.contacts.split(',');
      this.textFirst = textSplit[0];
      this.textSecond = textSplit[1];
    }
    this.telMinimized = this.textFirst.split(' ').join('').split('-').join('');
  }

}
