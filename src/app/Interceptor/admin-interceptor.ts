import { Injectable, } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../layouts/auth-layout/auth.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    loginObj: any = []
    errorTimout: any;
    constructor(
        private ngxService: NgxUiLoaderService,
        private service: AuthService,
        private router: Router,
        private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.ngxService.start()
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer' + ' ' + access_token)
            });
        }
        this.ngxService.stop();

        return next.handle(req).pipe(catchError(err => {

            if (err.status == 401) {
                if (this.errorTimout) {
                    clearTimeout(this.errorTimout)
                }
                this.errorTimout = setTimeout(() => {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    this.router.navigate(['login']);
                }, 250);
            }

            if (err.status == 400) {
                this.toastr.error(err.error.error.message);
            }

            if (err.status == 404 || err.status == 500) {
                this.toastr.error("Oops! There’s a problem. Contact support");
            }

            return throwError(err);
        }));
    }
}
