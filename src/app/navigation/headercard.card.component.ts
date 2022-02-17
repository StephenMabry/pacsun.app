import { Component, Input } from "@angular/core";

@Component({
    selector: 'ps-headercard',
    templateUrl: 'headercard.card.component.html',
    styleUrls: ['headercard.card.component.css']
})
export class HeaderCardComponent{
    @Input() name;

    constructor(){
        this.name = "";
    }

}