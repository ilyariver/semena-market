import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiButtonComponent } from './shared/ui-elements/ui-button/ui-button.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { SelectedComponent } from './layout/components/header/selected/selected.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MainComponent } from './layout/components/main/main.component';
import { FooterColumnsComponent } from './layout/components/footer/footer-columns/footer-columns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UiButtonComponent,
    ContactsComponent,
    SelectedComponent,
    FooterComponent,
    MainComponent,
    FooterColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
