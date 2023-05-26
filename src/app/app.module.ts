import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, NgxCsvParserModule, BrowserAnimationsModule, MatExpansionModule, MatTableModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
