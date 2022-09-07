import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'page-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
    @Input() hostObject: any;

    @Output() hostEvents: EventEmitter<any> = new EventEmitter<any>();

    constructor(private translate: TranslateService) {
    }

    randomNumber: string = "";

    ngOnInit(): void {
    }

    ngOnChanges(e: any): void {

    }

    buttonClick() {
        const eventData = {
            detail: {
                eventKey: 'TSAButtonPressed',
                // the data for the event
                eventData: { },
                completion: (data) => {
                    this.randomNumber = data.randomNumber;
                }
            },
        };
        const event = new CustomEvent('emit-event', eventData);
        window.dispatchEvent(event);
    }
}
