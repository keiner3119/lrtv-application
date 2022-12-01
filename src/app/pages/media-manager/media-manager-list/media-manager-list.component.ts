import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmModalComponent } from 'src/app/shared-modal/confirm-modal/confirm-modal.component';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-media-manager-list',
  templateUrl: './media-manager-list.component.html',
  styleUrls: ['./media-manager-list.component.scss']
})
export class MediaManagerListComponent implements OnInit {
  managersList: any = [];
  bsModalRef: BsModalRef;
  constructor(private sharedService: SharedService,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService) {

    this.managersList = [];
  }

  ngOnInit() {
    this.getManagers();
  }

  getManagers() {
    this.sharedService.getManagers({}).subscribe(res => {
      this.managersList = res.data;
    })
  }

  deleteManager(managerId) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { initialState: { title: 'Delete manager', secondaryText: 'Are you sure you want to delete this manager ?' } });
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.sharedService.deleteManager(managerId).subscribe((res: any) => {
          this.toastr.success("Manager deleted successfully")
          this.getManagers();
        })
      }
    });
  }

}
