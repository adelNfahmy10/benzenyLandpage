import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ContactComponent } from './layout/contact/contact.component';

export const routes: Routes = [
  {path:'', redirectTo:'benzeny', pathMatch:'full'},
  {path:'benzeny', component:BlankComponent, title:'Benezeny'},
  {path:'contact', component:ContactComponent, title:'Contact Us'},
];
