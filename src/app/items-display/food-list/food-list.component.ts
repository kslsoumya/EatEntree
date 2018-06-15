import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../app-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  public itemsList: any;

  constructor(private appHttpService: AppHttpService, private toastr: ToastrService) { }

  ngOnInit() {

    this.appHttpService.getFoodList().subscribe(
      (data) => {
        this.itemsList = data;
        console.log(this.itemsList);
      },
      (err) => {
        this.toastr.error('Some Error occured!!');
      }
    );

  }
}
