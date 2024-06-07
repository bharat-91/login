import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }
  login() {
    const user = this.authService.login(this.form.value.userName, this.form.value.password)

    if (!user) {
      alert("invalid Name and Password")
    } else {
      this.router.navigateByUrl('/admin')
    }
  }
}
