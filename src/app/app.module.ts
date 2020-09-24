import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { RoundPipe } from './pipes/round.pipe';
import { LocalShortTimePipe } from './pipes/local-short-time.pipe';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    SearchFormComponent,
    ResultCardComponent,
    RoundPipe,
    LocalShortTimePipe,
    IconComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
