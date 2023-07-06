import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraydemoComponent } from './arraydemo/arraydemo.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EvenComponent } from './even/even.component';
import { UserComponent } from './user/user.component';
import { TextboxComponent } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraydemoComponent,
    MovieListComponent,
    EvenComponent,
    UserComponent,
    TextboxComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
