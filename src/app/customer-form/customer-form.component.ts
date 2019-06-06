import { Component, OnInit,Directive,Input } from '@angular/core';
import { Customer } from '../customer';
import { Validator, AbstractControl, NG_VALIDATORS, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})

// @Directive({
//   selector: "[min][formControlName],[min][formControl],[min][ngModel]",
//   providers: [
//       { provide: NG_VALIDATORS,
//     useExisting: MinDirective,
//     multi: true }
//   ]
// })
// export class MinDirective implements Validator {
//   private _validator: ValidatorFn;
//   @Input() public set min(value: string) {
//       this._validator = Validators.min(parseInt(value, 10));
//   }

//   public validate(control: AbstractControl): { [key: string]: any } {
//       return this._validator(control);
//   }
// }

// @Directive({
//   selector: "[max][formControlName],[max][formControl],[max][ngModel]",
//   providers: [
//       { provide: NG_VALIDATORS,
//     useExisting: MaxDirective,
//     multi: true }
//   ]
// })
// export class MaxDirective implements Validator {
//   private _validator: ValidatorFn;
//   @Input() public set max(value: string) {
//       this._validator = Validators.max(parseInt(value, 10));
//   }

//   public validate(control: AbstractControl): { [key: string]: any } {
//       return this._validator(control);
//   }
// }

export class CustomerFormComponent implements OnInit {

  customerTypeList = [
    { "customerKey" : "Owner", "customerTitle" : "Owner" },
    { "customerKey" : "Tenant", "customerTitle" : "Tenant" },
  ];

  occupationList = [
    { "occupationKey" : "Business", "occupationTitle" : "Business" },
    { "occupationKey" : "Doctor", "occupationTitle" : "Doctor" },
    { "occupationKey" : "Employee", "occupationTitle" : "Employee" },
    { "occupationKey" : "Lawyer", "occupationTitle" : "Lawyer" },
    { "occupationKey" : "Software Engineer", "occupationTitle" : "Software Engineer" }
  ];

  //model = new Customer(this.customerTypeList[0].customerKey, 'Chandra', 'Ch', 99, '');
  
  model: any = {};
  
  // customerType : any;
  submitted = false;
  
  custFormSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  constructor() { }

  ngOnInit() {
    this.model.customerGender = 1;
    this.model.customerType = "Owner";
    this.model.customerOccupation = "Business";
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
