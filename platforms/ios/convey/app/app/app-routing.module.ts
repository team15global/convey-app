import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FormComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'item/:id', component: ItemDetailComponent }
];

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }