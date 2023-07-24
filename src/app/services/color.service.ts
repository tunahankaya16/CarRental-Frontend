import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
apiUrl='https://localhost:7022/api/colors/getall'
  constructor(private httpcilent:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
return this.httpcilent.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
