import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  title:string;
  newInfo:any = {};
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onSubmit(){
    this.event.emit({result: true, comment: this.newInfo.comments});
  }

  close() {
    this.bsModalRef.hide()
  }

}
