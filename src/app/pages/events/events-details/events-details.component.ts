import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {

  eventId: string;
  eventView: any;
  eventStatus: any = {};
  eventStatusColor: any = {};

  constructor(private sharedService: SharedService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.getEventDetails();
    this.eventStatus = {
      "1": "Created",
      "2": "Request Sent",
      "3": "Request Approved",
      "4": "Request Declined"
    };
    this.eventStatusColor = {
      "1": "#11CDEF",
      "2": "#FFD900",
      "3": "#2DCE89",
      "4": "#F5365C"
    };
  }

  getEventDetails() {
    this.sharedService.detailEvents(this.eventId).subscribe(res => {
      this.eventView = res.data;
    })
  }

}
