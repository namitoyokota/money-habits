import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    file: File | null = null;

    onFileInput(files: FileList | null): void {
        console.log(files);

        if (files) {
            this.file = files.item(0);
        }
    }
}
