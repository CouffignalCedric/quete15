import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: ['']
    }),

    address: this.fb.group({
      street: [''],
      postalCode: [''],
      city: ['']
    })

  });

  // username = new FormControl('');
  // email = new FormControl('');
  // password  = new FormControl('');
  // street = new FormControl('');
  // postalCode = new FormControl('');
  // city = new FormControl('');
  // submit: boolean= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  // changeusername(){
  //   this.username.setValue('kitten69');
  // }
  onSubmit() {
   console.log(this.userForm.value);
 

  }
}
