"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patient_1 = require("~/app/patient");
var nativescript_angular_1 = require("nativescript-angular");
var FormComponent = /** @class */ (function () {
    function FormComponent(router) {
        this.router = router;
        this.states = ['PA', "NY", 'FL'];
        this.conditions = ['ALS', 'Autism', 'Cancer', "Crohn's disease", 'Nervous damage', 'Epilepsy', 'Glaucoma', 'HIV / AIDS', "Huntington's disease", "IBD", "Intractable seizures", 'Multiple sclerosis', 'Neuropathies', "Parkinson's Disease", "PTSD", "Pain", "Sickle cell anemia"];
        this.frequency = ['First time', 'Once a month', 'Once a week', 'Once a day', 'More'];
    }
    FormComponent.prototype.ngOnInit = function () {
        this._patient = new patient_1.Patient("IBS", "PA", 'Daily');
    };
    Object.defineProperty(FormComponent.prototype, "patient", {
        get: function () {
            return this._patient;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.submit = function () {
        console.log('submit form');
        this.router.navigate(["items"]);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "form",
            moduleId: module.id,
            templateUrl: "./form.component.html",
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5Q0FBd0M7QUFDeEMsNkRBQXdEO0FBT3hEO0lBT0ksdUJBQW9CLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSnBDLFdBQU0sR0FBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDblIsY0FBUyxHQUFRLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFFakQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVNLDhCQUFNLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBckJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUThCLHVDQUFnQjtPQVBuQyxhQUFhLENBc0J6QjtJQUFELG9CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSBcIn4vYXBwL3BhdGllbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZm9ybVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mb3JtLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBfcGF0aWVudDogUGF0aWVudDtcbiAgICBwcml2YXRlIHN0YXRlczogYW55ID0gWydQQScsIFwiTllcIiwgJ0ZMJ107XG4gICAgcHJpdmF0ZSBjb25kaXRpb25zOiBhbnkgPSBbJ0FMUycsICdBdXRpc20nLCAnQ2FuY2VyJywgXCJDcm9obidzIGRpc2Vhc2VcIiwgJ05lcnZvdXMgZGFtYWdlJywgJ0VwaWxlcHN5JywgJ0dsYXVjb21hJywgJ0hJViAvIEFJRFMnLCBcIkh1bnRpbmd0b24ncyBkaXNlYXNlXCIsIFwiSUJEXCIsIFwiSW50cmFjdGFibGUgc2VpenVyZXNcIiwgJ011bHRpcGxlIHNjbGVyb3NpcycsICdOZXVyb3BhdGhpZXMnLCBcIlBhcmtpbnNvbidzIERpc2Vhc2VcIiwgXCJQVFNEXCIsIFwiUGFpblwiLCBcIlNpY2tsZSBjZWxsIGFuZW1pYVwiXTtcbiAgICBwcml2YXRlIGZyZXF1ZW5jeTogYW55ID0gWydGaXJzdCB0aW1lJywgJ09uY2UgYSBtb250aCcsICdPbmNlIGEgd2VlaycsICdPbmNlIGEgZGF5JywgJ01vcmUnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXRpZW50ID0gbmV3IFBhdGllbnQoXCJJQlNcIiwgXCJQQVwiLCAnRGFpbHknKTtcbiAgICB9XG5cbiAgICBnZXQgcGF0aWVudCgpOiBQYXRpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGllbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCBmb3JtJylcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJpdGVtc1wiXSlcbiAgICB9XG59Il19