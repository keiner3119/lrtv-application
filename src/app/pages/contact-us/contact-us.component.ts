import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  newContact: any ={};
  editOption:boolean= false;
  oldContact: any = {};
  constructor(private sharedService : SharedService, private ngxService: NgxUiLoaderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sharedService.getContactUs().subscribe(res => {
      this.newContact.content = res.data.contactUsContent;
      this.oldContact = JSON.parse(JSON.stringify(this.newContact));
    })
  }

  onCancel(){
    this.newContact = JSON.parse(JSON.stringify(this.oldContact));
    this.editOption = !this.editOption;
  }

  onSubmit(item) {
    this.ngxService.start();
    this.sharedService.updateContactUs(item).subscribe(res => {
      this.ngxService.stop()
      this.toastr.success("Contact US updated successfully")
      this.editOption = !this.editOption;
      this.oldContact = JSON.parse(JSON.stringify(item));
    })
  }

}
