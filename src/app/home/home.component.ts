import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../service/api.service';
import { CityModel } from './city.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityDetails!:FormGroup
  cityObject:CityModel=new CityModel
  cityData!:any
 
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {

    this.cityDetails=this.formBuilder.group({
      id:['']
    })
  }

  postCityData(){
    this.cityObject.id=this.cityDetails.value.id
 this.api.city=this.cityObject.id,


 this.api.get().subscribe((res:any)=>{
this.cityData=res

console.log(this.cityData)
 })
  }
}
