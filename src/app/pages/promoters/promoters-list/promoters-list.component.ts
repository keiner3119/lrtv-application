import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmModalComponent } from 'src/app/shared-modal/confirm-modal/confirm-modal.component';
import { PromoterChangePasswordComponent } from 'src/app/shared-modal/promoter-change-password/promoter-change-password.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-promoters-list',
  templateUrl: './promoters-list.component.html',
  styleUrls: ['./promoters-list.component.scss']
})
export class PromotersListComponent implements OnInit {
  promotersList: any;
  page: number;
  totalCount: number;
  limit: number;
  bsModalRef: BsModalRef;

  constructor(private sharedService: SharedService,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService) {
    this.page = 1;
    this.limit = 10;
    this.totalCount = 0;
    this.promotersList = [];
  }

  ngOnInit() {
    this.getPromoters();
  }

  getPromoters() {

    let params: any = {
      page: this.page,
      limit: this.limit
    }

    this.sharedService.getPromoters(params).subscribe(res => {
      this.promotersList = res.data.docs;
      this.totalCount = res.data.total;
    })
  }

  pageChange(newPage) {
    this.page = newPage;
    this.getPromoters();
  }

  limitChange(newLimit) {
    this.page = 1;
    this.limit = newLimit;
    this.getPromoters();
  }

  changePassword(userId) {
    this.bsModalRef = this.modalService.show(PromoterChangePasswordComponent);
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.ngxService.start();
        this.sharedService.changePromoterPassword({ newPassword: data.password, userId: userId }).subscribe(res => {
          this.ngxService.stop();
          this.toastr.success("Password change successfully")
        })
      }
    });
  }

  deletePromoter(promoterId) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { initialState: { title: 'Delete promoter', secondaryText: 'Are you sure you want to delete this promoter ?' } });
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.sharedService.deletePromoter(promoterId).subscribe((res: any) => {
          this.toastr.success("Promoter deleted successfully")
          this.getPromoters();
        })
      }
    });
  }

}
