import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardModule } from '../../pages/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../auth-layout/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FileUploadModule } from 'ng2-file-upload';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/shared/shared.module'
import { AppUserModule } from 'src/app/pages/app-user/app-user.module';
import { PromotersModule } from 'src/app/pages/promoters/promoters.module';
import { CategoryModule } from 'src/app/pages/category/category.module';
import { EventsModule } from 'src/app/pages/events/events.module';
import { ContactUsModule } from 'src/app/pages/contact-us/contact-us.module';
import { MediaManagerModule } from 'src/app/pages/media-manager/media-manager.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule,
    NgxUiLoaderModule,
    Ng2SearchPipeModule,
    CKEditorModule,
    FileUploadModule,
    EllipsisModule,
    NgMultiSelectDropDownModule,
    DashboardModule,
    SharedModule,
    AppUserModule,
    PromotersModule,
    CategoryModule,
    EventsModule,
    ContactUsModule,
    MediaManagerModule
  ],
  declarations: [],
  providers: [AuthGuard]
})

export class AdminLayoutModule { }
