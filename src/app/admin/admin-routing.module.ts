import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincComponent } from './adminc.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {path:'', component:AdmincComponent, children:[
    {path:'', component:UsersPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
