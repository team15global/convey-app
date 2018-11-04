"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.strain1 = {
            url: 'res://bluedream',
            name: 'Blue Dream',
            descrip: 'SATIVA'
        };
        this.strain2 = {
            url: 'cdn.shopify.com/s/files/1/1061/0012/products/Tangie-Solo_grande.jpg',
            name: 'Tangie',
            descrip: 'SATIVA'
        };
        this.strain3 = {
            url: 'cdn.shopify.com/s/files/1/1061/0012/products/Fruity_Pebbles-Circle_grande.jpg',
            name: 'Fruity Pebbles',
            descrip: 'INDICA'
        };
    }
    ItemsComponent.prototype.ngOnInit = function () {
        console.log(this.strain1);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBT2xEO0lBb0JJO1FBbEJPLFlBQU8sR0FBUTtZQUNsQixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLElBQUksRUFBRSxZQUFZO1lBQ2xCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7UUFFSyxZQUFPLEdBQVE7WUFDbEIsR0FBRyxFQUFFLHFFQUFxRTtZQUMxRSxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7UUFFSyxZQUFPLEdBQVE7WUFDbEIsR0FBRyxFQUFFLCtFQUErRTtZQUNwRixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFFYyxDQUFDO0lBRWpCLGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBeEJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BQ1csY0FBYyxDQTBCMUI7SUFBRCxxQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgc3RyYWluMTogYW55ID0ge1xuICAgICAgICB1cmw6ICdyZXM6Ly9ibHVlZHJlYW0nLFxuICAgICAgICBuYW1lOiAnQmx1ZSBEcmVhbScsXG4gICAgICAgIGRlc2NyaXA6ICdTQVRJVkEnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdHJhaW4yOiBhbnkgPSB7XG4gICAgICAgIHVybDogJ2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMTA2MS8wMDEyL3Byb2R1Y3RzL1RhbmdpZS1Tb2xvX2dyYW5kZS5qcGcnLFxuICAgICAgICBuYW1lOiAnVGFuZ2llJyxcbiAgICAgICAgZGVzY3JpcDogJ1NBVElWQSdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0cmFpbjM6IGFueSA9IHtcbiAgICAgICAgdXJsOiAnY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8xMDYxLzAwMTIvcHJvZHVjdHMvRnJ1aXR5X1BlYmJsZXMtQ2lyY2xlX2dyYW5kZS5qcGcnLFxuICAgICAgICBuYW1lOiAnRnJ1aXR5IFBlYmJsZXMnLFxuICAgICAgICBkZXNjcmlwOiAnSU5ESUNBJ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RyYWluMSk7XG4gICAgfVxuXG59Il19