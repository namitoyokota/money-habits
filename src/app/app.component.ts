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
    header = true;
    file: File | null = null;

    mp = new Map<string, Transaction[]>();

    constructor(private ngxCsvParser: NgxCsvParser) {}

    onFileInput(files: FileList | null): void {
        if (files) {
            this.file = files.item(0);

            this.ngxCsvParser
                .parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
                .pipe()
                .subscribe({
                    next: (result): void => {
                        this.csvRecords = result as Transaction[];

                        const m = new Map<string, Transaction[]>();
                        this.csvRecords.forEach((transaction) => {
                            if (m.has(transaction.Description)) {
                                const currentList = m.get(transaction.Description) as Transaction[];
                                m.set(transaction.Description, [...currentList, transaction]);
                            } else {
                                m.set(transaction.Description, [transaction]);
                            }
                        });

                        this.mp = new Map([...m].sort((a, b) => (a[1].length > b[1].length ? -1 : 1)));
                        console.log(this.mp);
                    },
                    error: (error: NgxCSVParserError): void => {
                        console.log('Error', error);
                    },
                });
        }
    }
}
