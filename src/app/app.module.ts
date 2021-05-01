import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAddComponent } from './component/form-add/form-add.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';
import { ContactsService } from './service/contacts.service';
import { FormsModule } from '@angular/forms';
import { TableContactsComponent } from './component/table-contacts/table-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddComponent,
    FormEditComponent,
    TableContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
