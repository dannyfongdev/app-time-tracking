import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeframeSelectorComponent } from './timeframe-selector/timeframe-selector.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeframeSelectorComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
