import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './component/form-add/form-add.component';
import { FormEditComponent } from './component/form-edit/form-edit.component';
import { TableContactsComponent } from './component/table-contacts/table-contacts.component';

const routes: Routes = [
  {path:'', component: TableContactsComponent },
  {path:'add', component: FormAddComponent },
  {path:'edit/:id', component: FormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
