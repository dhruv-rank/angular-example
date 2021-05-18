import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';
import { BasicService } from '../basic.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appAsyncTemplateDrivenValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useClass: AsyncTemplateDrivenValidatorDirective,
    multi: true
  }]
})
export class AsyncTemplateDrivenValidatorDirective implements AsyncValidator {

  constructor(private basic: BasicService) { }

  validate(c: FormControl) {
    return this.asyncValidationFunction(c);
  }

  asyncValidationFunction(c: FormControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
    return this.basic.giveMeSomthingAsync();
  }
}
