import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  title:string;
  secondaryText:string;
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onSubmit(){
    this.event.emit({result: true});
  }

  close() {
    this.bsModalRef.hide()
  }

}
