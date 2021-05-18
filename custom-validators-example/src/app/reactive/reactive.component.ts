import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private bd:FormBuilder) { }

  createForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createForm = new FormGroup({
      name: new FormControl('initial value', [Validators.required], []),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  onSubmit() {
    console.log(this.createForm.value);
  }
}
