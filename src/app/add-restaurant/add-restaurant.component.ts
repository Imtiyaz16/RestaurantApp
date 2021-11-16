import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean=false;
  addRestaurent=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('') 
  });
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){ 
    // console.log(this.addRestaurent.value);
    this.resto.addResto(this.addRestaurent.value).subscribe((result )=>{
      this.alert=true;
      this.addRestaurent.reset({});

      console.log("Get Data From Service", result);
    });
  }

  closeAlert(){
    this.alert=false;
  }

}
