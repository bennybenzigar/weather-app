import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  city:any
  constructor(private http:HttpClient) {}



get(){
return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f3bec74bf7ebff9171807b64c7c51ce1`)
.pipe(map((res:any)=>{
  return res
}))
}
}
