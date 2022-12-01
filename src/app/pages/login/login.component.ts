import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../layouts/auth-layout/auth.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  adminForm: FormGroup;

  constructor(private service: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit() {

    if (localStorage.getItem('access_token')) {
      this.router.navigate(['dashboard']);
    }
    this.adminForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }
  ngOnDestroy() {
  }

  OnSubmit(adminForm) {
    this.ngxService.start();

    this.service.adminAuth(adminForm).subscribe((res: any) => {
      this.ngxService.stop()

      if (res.data['scope'] === 1) {
        localStorage.setItem('access_token', res.data['accessToken'])
        localStorage.setItem('refresh_token', res.data['refreshToken'])

        this.router.navigate(['dashboard'])
        this.toastr.success('Login successful!')
      } else {
        this.toastr.error('Invalid grant: user credentials are invalid');
      }
    });
  }


}
