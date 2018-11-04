import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    public strain1: any = {
        url: 'cdn.shopify.com/s/files/1/1061/0012/products/blue_dream-Solo_Flower_grande.jpg',
        name: 'Blue Dream',
        descrip: 'SATIVA'
    };

    public strain2: any = {
        url: 'cdn.shopify.com/s/files/1/1061/0012/products/Tangie-Solo_grande.jpg',
        name: 'Tangie',
        descrip: 'SATIVA'
    };

    public strain3: any = {
        url: 'cdn.shopify.com/s/files/1/1061/0012/products/Fruity_Pebbles-Circle_grande.jpg',
        name: 'Fruity Pebbles',
        descrip: 'INDICA'
    };

    constructor() { }

    ngOnInit(): void {
        console.log(this.strain1);
    }

}