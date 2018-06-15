import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  private baseUrl = 'http://texpertise.in/data.php';

  constructor(private _http: HttpClient) {

  }

  // Service to get the food list
  public getFoodList = () => {
    return (this._http.get(this.baseUrl));
  }

}
