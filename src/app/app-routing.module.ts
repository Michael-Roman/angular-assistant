import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent }   from './components/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: TodoListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
