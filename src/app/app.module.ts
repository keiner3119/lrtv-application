import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader'


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './Interceptor/admin-interceptor';

import { ModalModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './shared-modal/confirm-modal/confirm-modal.component';
import { CommentModalComponent } from './shared-modal/comment-modal/comment-modal/comment-modal.component';
import { PromoterChangePasswordComponent } from './shared-modal/promoter-change-password/promoter-change-password.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#DA1921",
  "bgsOpacity": 0.3,
  "bgsPosition": "bottom-right",
  "bgsSize": 30,
  "bgsType": "ball-spin",
  "blur": 5,
  "fgsColor": "#DA1921",
  "fgsPosition": "center-center",
  "fgsSize": 40,
  "fgsType": "ball-spin",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40,40,40,0.31)",
  "pbColor": "#DA1921",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center"
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      timeOut: 3000,
      preventDuplicates: true,
    }),
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ConfirmModalComponent,
    CommentModalComponent,
    PromoterChangePasswordComponent,
  ],
  entryComponents: [ConfirmModalComponent,CommentModalComponent,PromoterChangePasswordComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
