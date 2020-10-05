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
import { SearchCardComponent } from './components/search-card/search-card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultCardComponent,
    RoundPipe,
    LocalShortTimePipe,
    IconComponent,
    NoResultCardComponent,
    SearchCardComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
