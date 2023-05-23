import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxCsvParserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
