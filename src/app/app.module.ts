import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './components/app.component';
import {TodoListComponent} from "./components/todo-list.component";
import {StorageService} from "./storage.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
