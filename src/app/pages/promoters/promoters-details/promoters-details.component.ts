import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { S3UploadService } from 'src/app/services/s3-upload.service';

@Component({
  selector: 'app-promoters-details',
  templateUrl: './promoters-details.component.html',
  styleUrls: ['./promoters-details.component.scss']
})
export class PromotersDetailsComponent implements OnInit {
  newPromoter:any = {};
  promoterId: string;
  categoryList: any;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private sharedService: SharedService,
    private ngxService: NgxUiLoaderService,
    private s3Upload: S3UploadService) { }

  ngOnInit() {
    this.promoterId = this.route.snapshot.paramMap.get('id');

    if (this.promoterId != null) {
      this.getPromoterDetails();
      
    }else{
      this.newPromoter = {};
    }
    this.getCategory();

  }

  getCategory() {
    this.sharedService.getCategory().subscribe(res => {
      this.categoryList = res.data;
    })
  }

  getPromoterDetails() {
    this.sharedService.detailPromoter(this.promoterId).subscribe(res => {
      this.newPromoter = res.data;
      this.newPromoter.channelCategory = this.newPromoter.channelCategory._id
    })
  }

  OnSubmit(promoterForm) {

    if (this.promoterId != null) {

      if(promoterForm.hasOwnProperty('fullName') && promoterForm.hasOwnProperty('email') && promoterForm.hasOwnProperty('channelName') && promoterForm.hasOwnProperty('phoneNumber') && promoterForm.hasOwnProperty('channelCategory')){
        this.ngxService.start();
        this.sharedService.updatePromoters(this.promoterId, promoterForm).subscribe(res => {
          this.ngxService.stop()
          this.toastr.success("Promoter updated successfully")
          this.router.navigate(['promoters'])
        })
      } 
    }
    else {

      if(promoterForm.hasOwnProperty('fullName') && promoterForm.hasOwnProperty('email') && promoterForm.hasOwnProperty('channelName') && promoterForm.hasOwnProperty('phoneNumber') && promoterForm.hasOwnProperty('channelCategory') && promoterForm.hasOwnProperty('password')){
        this.ngxService.start();
        this.sharedService.savePromoters(promoterForm).subscribe(res => {
          this.ngxService.stop()
          this.router.navigate(['promoters'])
          this.toastr.success("Promoter created successfully")
        })
      }
      
    }
  }

  selectFile(event) {
    this.ngxService.start();
    this.s3Upload.uploadToBucket(event.target.files[0]).then((url) => {
      this.ngxService.stop();
      this.newPromoter.profileImage = url.Location;
    })
  }

  onKeyPressNumber(e) {
    var charCode = (e.which) ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
  }

}
