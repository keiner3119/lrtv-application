import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-promoter-change-password',
  templateUrl: './promoter-change-password.component.html',
  styleUrls: ['./promoter-change-password.component.scss']
})
export class PromoterChangePasswordComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  newInfo:any = {};

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onSubmit(){
    this.event.emit({result: true, password: this.newInfo.newPassword});
  }

  close() {
    this.bsModalRef.hide()
  }

}
