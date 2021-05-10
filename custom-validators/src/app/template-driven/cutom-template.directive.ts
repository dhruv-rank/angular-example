import { Directive, Input, ElementRef } from '@angular/core';
import { Validator, ValidatorFn, FormControl, AbstractControl, NG_VALIDATORS, AsyncValidatorFn, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Directive({
  selector: '[appCutomTemplate]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useClass: CutomTemplateDirective,
    multi: true
  }]
})
export class CutomTemplateDirective implements AsyncValidator {

  validator: ValidatorFn;

  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
    this.validator = this.validateJuriNameFactory();
  }

  validate(c: FormControl) {
    return of(this.validator(c));
  }

  validateJuriNameFactory() {
    return this.validatorFunction;
    // return (c: AbstractControl) => {
    //   if (c.value != 'rankdhruv') {
    //     return { emailError: true }
    //   }
    //   return null;
    // }
  }

  validatorFunction(c: AbstractControl): ValidationErrors | null {
    if (c.value != 'rankdhruv') {
      return { 'emailError': true }
    }
    return null;
  }


}
