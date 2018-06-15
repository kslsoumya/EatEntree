import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppHttpService } from '../../app-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  public item: any;
  public allData: any;

  constructor(private _route: ActivatedRoute, private appHttpService: AppHttpService, public toastr: ToastrService) { }

  ngOnInit() {
    const itemSelected = this._route.snapshot.paramMap.get('name');
    this.appHttpService.getFoodList().subscribe(
      (data) => {
        console.log(data);
        this.allData = data;
        this.allData.forEach(val => {
          if (val.name === itemSelected) {
            this.item = val;
          }
        });
      },
      (err) => {
        this.toastr.error('Some error Occured');
      }
    );
  }

  public trayClick = () => {
    this.toastr.success('Succesfully added to Tray');
  }

}
