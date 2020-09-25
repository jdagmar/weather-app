import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { RoundPipe } from './pipes/round.pipe';
import { LocalShortTimePipe } from './pipes/local-short-time.pipe';
import { IconComponent } from './components/icon/icon.component';
import { NoResultCardComponent } from './components/no-result-card/no-result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultCardComponent,
    RoundPipe,
    LocalShortTimePipe,
    IconComponent,
    NoResultCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
