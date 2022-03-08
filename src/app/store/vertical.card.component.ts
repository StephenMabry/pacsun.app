import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'ps-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css']
})

export class VerticalCardComponent implements OnInit{
    @Input() img: string;
    @Input() name: string;
    @Input() price: number;

    constructor(){
        this.img = "";
        this.name = "";
        this.price = 0;
    }
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

}