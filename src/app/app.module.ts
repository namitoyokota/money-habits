import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxCsvParserModule, BrowserAnimationsModule, MatExpansionModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
