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
  temp!:number
  
 
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
this.temp=Number(Math.floor(this.cityData.main.temp))-273
console.log(this.cityData)
 })
  }
}
