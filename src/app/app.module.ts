import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { RoundPipe } from './pipes/round.pipe';
import { IconThunderstormComponent } from './components/icons/icon-thunderstorm/icon-thunderstorm.component';
import { IconDrizzleComponent } from './components/icons/icon-drizzle/icon-drizzle.component';
import { IconRainComponent } from './components/icons/icon-rain/icon-rain.component';
import { IconSnowComponent } from './components/icons/icon-snow/icon-snow.component';
import { IconAtmosphereComponent } from './components/icons/icon-atmosphere/icon-atmosphere.component';
import { IconClearComponent } from './components/icons/icon-clear/icon-clear.component';
import { IconCloudsComponent } from './components/icons/icon-clouds/icon-clouds.component';
import { IconSearchComponent } from './components/icons/icon-search/icon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    SearchFormComponent,
    ResultCardComponent,
    RoundPipe,
    IconThunderstormComponent,
    IconDrizzleComponent,
    IconRainComponent,
    IconSnowComponent,
    IconAtmosphereComponent,
    IconClearComponent,
    IconCloudsComponent,
    IconSearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
