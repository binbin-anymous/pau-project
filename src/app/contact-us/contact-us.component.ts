import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
