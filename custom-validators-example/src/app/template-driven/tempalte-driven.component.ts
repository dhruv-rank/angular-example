import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempalte-driven',
  templateUrl: './tempalte-driven.component.html',
  styleUrls: ['./tempalte-driven.component.scss']
})
export class TempalteDrivenComponent implements OnInit {


  @ViewChild('newForm') newForm: NgForm;

  constructor() { }
  submitted = false;
  ngOnInit(): void {
  }

  counterArray = [1, 2, '3', 4, 5, 6];
  onSubmit(form: NgForm) {
    this.submitted = true;
    if (this.submitted && !this.newForm.valid) {
      console.log(this.newForm);
      return;
    }
    alert('you are succeed');

  }

}
