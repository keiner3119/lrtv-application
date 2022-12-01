import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {
  userList: any;
  page: number;
  totalCount: number;
  limit: number;
  constructor(private sharedService : SharedService) { 
    this.page = 1;
    this.limit = 10;
    this.totalCount = 0;
    this.userList = [];
  }

  ngOnInit() {
    this.getAppUsers();
  }

  getAppUsers(){

    let params:any = {
      page : this.page,
      limit: this.limit
    }

    this.sharedService.getAppUsers(params).subscribe(res => {
      this.userList = res.data.docs;
      this.totalCount = res.data.total;
    })
  }

  pageChange(newPage) {
    this.page = newPage;
    this.getAppUsers();
  }

  limitChange(newLimit) {
    this.page = 1;
    this.limit = newLimit;
    this.getAppUsers();
  }

}
