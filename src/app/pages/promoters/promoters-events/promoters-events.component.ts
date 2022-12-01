import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promoters-events',
  templateUrl: './promoters-events.component.html',
  styleUrls: ['./promoters-events.component.scss']
})
export class PromotersEventsComponent implements OnInit {
  page: number;
  limit: number;
  totalCount: number;
  eventsList: any = [];
  eventStatus: any = {};
  eventStatusColor: any = {};

  constructor(private sharedService: SharedService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.page = 1;
    this.limit = 10;
    this.totalCount = 0;
    this.eventsList = [];

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

    this.getEvents();
  }

  getEvents(){

    let params:any = {
      page : this.page,
      limit: this.limit
    }

    this.sharedService.getPromoterEvents(params,this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.eventsList = res.data.docs;
      this.totalCount = res.data.total;
    })
  }

  pageChange(newPage) {
    this.page = newPage;
    this.getEvents();
  }

  limitChange(newLimit) {
    this.page = 1;
    this.limit = newLimit;
    this.getEvents();
  }

}
