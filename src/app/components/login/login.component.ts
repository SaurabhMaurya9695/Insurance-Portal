import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;
  params: Params;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => (this.params = params)
    );
  }

  onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    // this.authService.login(email, password).then((success: boolean) => {
    //   console.log("moving to dashboard" +  success)
    //   if (success) this.router.navigate(['/dashboard']);
    //   else {
    //     this.router.navigate(['/login'], {
    //       queryParams: { invalid: 'true' },
    //     });
    //   }
    // });

    this.authService.login(email , password).subscribe({
      next:(data : any)=>{
        console.log(data);
        this.authService.setUser(data);
        this.authService.loginUser(data.jwtToken)
        this.router.navigate(['/dashboard']);
      },
      error :(err : any)=>{
        console.log(err);
      }
    })
  }
}
