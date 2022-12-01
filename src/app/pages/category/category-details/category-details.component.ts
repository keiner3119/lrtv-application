import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  newCategory:any = {}
  constructor(private sharedService : SharedService,private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.ngxService.start();
    this.sharedService.saveCategory(this.newCategory).subscribe(res => {
      this.ngxService.stop()
      this.router.navigate(['category'])
      this.toastr.success('Category created successfully')
    })
  }

}
