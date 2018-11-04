import { Component, OnInit } from "@angular/core";
import { Patient } from "~/app/patient";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "form",
    moduleId: module.id,
    templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {

    private _patient: Patient;
    private states: any = ['PA', "NY", 'FL'];
    private conditions: any = ['ALS', 'Autism', 'Cancer', "Crohn's disease", 'Nervous damage', 'Epilepsy', 'Glaucoma', 'HIV / AIDS', "Huntington's disease", "IBD", "Intractable seizures", 'Multiple sclerosis', 'Neuropathies', "Parkinson's Disease", "PTSD", "Pain", "Sickle cell anemia"];
    private frequency: any = ['First time', 'Once a month', 'Once a week', 'Once a day', 'More'];

    constructor(private router: RouterExtensions) { }

    ngOnInit(): void {
        this._patient = new Patient("IBS", "PA", 'Daily');
    }

    get patient(): Patient {
        return this._patient;
    }

    public submit() {
        console.log('submit form')

        this.router.navigate(["items"])
    }
}