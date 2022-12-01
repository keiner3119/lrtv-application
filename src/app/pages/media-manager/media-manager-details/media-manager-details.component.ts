import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-media-manager-details',
  templateUrl: './media-manager-details.component.html',
  styleUrls: ['./media-manager-details.component.scss']
})
export class MediaManagerDetailsComponent implements OnInit {
  newManager:any = {};
  managerId: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private sharedService: SharedService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.managerId = this.route.snapshot.paramMap.get('id');

    if (this.managerId != null) {
      this.getManagerDetails();
      
    }else{
      this.newManager = {};
    }
  }

  getManagerDetails() {
    this.sharedService.detailManager(this.managerId).subscribe(res => {
      this.newManager = res.data;
    })
  }

  OnSubmit(managerForm) {

    if (this.managerId != null) {
      this.ngxService.start();
      this.sharedService.updateManager(this.managerId, managerForm).subscribe(res => {
        this.ngxService.stop()
        this.toastr.success("Manager updated successfully")
        this.router.navigate(['media-manager'])
      })
    }
    else {
      this.ngxService.start();
      this.sharedService.saveManager(managerForm).subscribe(res => {
        this.ngxService.stop()
        this.router.navigate(['media-manager'])
        this.toastr.success("Manager created successfully")
      })
    }
  }

  onKeyPressNumber(e) {
    var charCode = (e.which) ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
  }

}
