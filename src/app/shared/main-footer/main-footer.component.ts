import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main-footer',
    templateUrl: './main-footer.component.html',
    styleUrls: ['./main-footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
