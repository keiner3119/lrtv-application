import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  userCount: any;
  promoterCount: any;
  boxerCount: any;

  constructor(private sharedService : SharedService) { }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sharedService.getAppUserCount().subscribe(res => {
      this.userCount = res.total;
      });
      this.sharedService.getPromotersCount().subscribe(res => {
        this.promoterCount = res.total;
      });
      this.sharedService.getBoxerCount().subscribe(res => {
        this.boxerCount = res.total;
      });
  }

}
