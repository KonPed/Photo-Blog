import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';
import { EntryComponent } from './entries/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
