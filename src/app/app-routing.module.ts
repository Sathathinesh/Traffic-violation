import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccidentComponent} from './accident/accident.component';
import {LoginComponent} from './login/login.component';
import {ViolationComponent} from './violation/violation.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  {path:'view', component: ViewComponent},
  {path:'accident', component: AccidentComponent},
  {path:'login', component: LoginComponent},
  {path:'violation', component: ViolationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AccidentComponent,LoginComponent,ViolationComponent]