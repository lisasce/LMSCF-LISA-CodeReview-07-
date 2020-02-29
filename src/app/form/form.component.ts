import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  info = new FormGroup({
    firstName: new FormControl('', Validators.minLength(3)),
    lastName: new FormControl('', Validators.minLength(3)),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.info.valid){
      var a = this.info.value;
      alert("your message has been successfully submitted.");
      // @ts-ignore
      document.getElementById("myForm").reset();
    }
}
}
