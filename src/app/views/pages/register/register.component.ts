import { AuthenticationService } from 'src/app/_services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;


  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required]
    });
  }


  //create a reactive form that contains, user, password, password2 and email


  get f() { return this.registerForm.controls; }


  onSubmit() {
    if(this.registerForm.valid){
      this.authenticationService.register(this.f['username'].value, this.f['password'].value,this.f['email'].value).subscribe();
    }
  }




}
