import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmModalComponent } from 'src/app/shared-modal/confirm-modal/confirm-modal.component';
import { CommentModalComponent } from 'src/app/shared-modal/comment-modal/comment-modal/comment-modal.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  eventsList: any;
  page: number;
  totalCount: number;
  limit: number;
  bsModalRef: BsModalRef;
  eventStatus: any = {};
  eventStatusColor: any = {};
  filter:any = {};
  promotersList: any = [];

  constructor(private sharedService: SharedService,
    private modalService: BsModalService,
    private toastr: ToastrService) {
    this.page = 1;
    this.limit = 10;
    this.totalCount = 0;
    this.eventsList = [];
  }

  ngOnInit() {
    this.eventStatus = {
      "1":"Created",
      "2":"Request Sent",
      "3":"Request Approved",
      "4":"Request Declined"
    };
    this.eventStatusColor = {
      "1":"#11CDEF",
      "2":"#FFD900",
      "3":"#2DCE89",
      "4":"#F5365C"
    };

    this.filter = {
      channelAdmin:'',
      status: '',
      section: '',
      directUploadedEvent: ''
    }
    this.getPromoters();
    this.getEvents();

  }

  getPromoters(){
    this.sharedService.getPromoters({}).subscribe(res => {
      this.promotersList = res.data.docs;
    })
  }

  getEvents(){

    let params:any = {
      page : this.page,
      limit: this.limit
    }

    if (this.filter.channelAdmin.length > 0) {
      params.channelAdmin = this.filter.channelAdmin;
    }

    if (this.filter.status.length > 0) {
      params.status = parseInt(this.filter.status);
    }

    if (this.filter.section.length > 0) {
      params.section = this.filter.section;
    }

    if (this.filter.directUploadedEvent.length > 0) {
      params.directUploadedEvent = Boolean(parseInt(this.filter.directUploadedEvent));
    }

    this.sharedService.getEvents(params).subscribe(res => {
      this.eventsList = res.data.docs;
      this.totalCount = res.data.total;
    })
  }

  pageChange(newPage) {
    this.page = newPage;
    this.getEvents();
  }

  onFilterChange() {
    this.page = 1;
    this.getEvents();
  }

  limitChange(newLimit) {
    this.page = 1;
    this.limit = newLimit;
    this.getEvents();
  }

  approveRequest(eventId) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, { initialState: { title: 'Approve Request', secondaryText: 'Are you sure you want to approve request for this event ?' } });
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.sharedService.approveEventRequest(eventId).subscribe((res: any) => {
          this.toastr.success("Event approve request sent successfully")
          this.getEvents();
        })
      }
    });
  }

  disApproveRequest(eventId) {
    this.bsModalRef = this.modalService.show(CommentModalComponent, { initialState: { title: 'Comments' } });
    this.bsModalRef.content.event.subscribe(data => {
      if (data.result) {
        this.bsModalRef.hide();
        this.sharedService.disapproveEventRequest({event_id:eventId,comment:data.comment}).subscribe((res: any) => {
          this.toastr.success("Event disapprove successfully")
          this.getEvents();
        })
      }
    });
  }

}
