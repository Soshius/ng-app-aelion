import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, PatternValidator, Validators} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // Syntaxe form builder, form array to look
  // Syntaxe form group


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.table(this.loginForm.value);
    this.authService.login();
    console.log(this.authService.isLoggedIn);
  }

}
