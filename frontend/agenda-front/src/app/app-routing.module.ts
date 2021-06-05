import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'contacts-detail/:id',
    component: ContactsDetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'listcontacts',
    component: ListContactsComponent
  },
  {
    path: '',
    redirectTo: 'listcontacts',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactsDetailComponent,]