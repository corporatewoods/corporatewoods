import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BookTableComponent } from './book-table/book-table.component';
import { FilterPipe } from './filter.pipe';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BookTableComponent,
    FilterPipe,
    FetchDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
