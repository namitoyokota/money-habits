import { Component } from '@angular/core';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';

interface Transaction {
    Amount: number;
    Date: string;
    Description: string;
    Time: string;
    Type: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    csvRecords: Transaction[] = [];
    header: boolean = true;
    file: File | null = null;

    constructor(private ngxCsvParser: NgxCsvParser) {}

    onFileInput(files: FileList | null): void {
        if (files) {
            this.file = files.item(0);

            this.ngxCsvParser
                .parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
                .pipe()
                .subscribe({
                    next: (result): void => {
                        console.log('Result', result);
                        this.csvRecords = result as Transaction[];
                    },
                    error: (error: NgxCSVParserError): void => {
                        console.log('Error', error);
                    },
                });
        }
    }
}
