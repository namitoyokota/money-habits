import { Component } from '@angular/core';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    csvRecords: any;
    header: boolean = false;
    file: File | null = null;

    constructor(private ngxCsvParser: NgxCsvParser) {}

    onFileInput(files: FileList | null): void {
        console.log(files);

        if (files) {
            this.file = files.item(0);

            this.header = (this.header as unknown as string) === 'true' || this.header === true;

            this.ngxCsvParser
                .parse(files[0], { header: this.header, delimiter: ',', encoding: 'utf8' })
                .pipe()
                .subscribe({
                    next: (result): void => {
                        console.log('Result', result);
                        this.csvRecords = result;
                    },
                    error: (error: NgxCSVParserError): void => {
                        console.log('Error', error);
                    },
                });
        }
    }
}
