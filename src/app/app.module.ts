import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService)
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
