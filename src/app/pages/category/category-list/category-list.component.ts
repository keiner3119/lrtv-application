import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared-modal/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryList: any = [];
  bsModalRef: BsModalRef;

  constructor(private sharedService: SharedService,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.sharedService.getCategory().subscribe(res => {
      this.categoryList = res.data;
    })
  }

  deleteCategory(categoryId) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { initialState: { title: 'Delete category', secondaryText: 'Are you sure you want to delete this category ?' } });
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.sharedService.deleteCategory(categoryId).subscribe((res: any) => {
          this.toastr.success("Category deleted successfully")
          this.getCategory();
        })
      }
    });
  }
}
