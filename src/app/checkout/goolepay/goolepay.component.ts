import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-goolepay',
  templateUrl: './goolepay.component.html',
  styleUrls: ['./goolepay.component.css']
})
export class GoolepayComponent implements OnInit {

    googlepaydet:any[] = [];
    newpayment_name:any[]= [];

    public userProfileForm = new FormGroup({
    cnumber: new FormControl('', Validators.required),
    cvvcode: new FormControl('', Validators.required),
    cvalidatedate: new FormControl('', Validators.required),
    cpayment_mode: new FormControl(this.newpayment_name),
  })

  constructor(private http: HttpClient, private dataservice: DataserviceService) { }

  ngOnInit(): void {
    
    this.newpayment_name = this.dataservice.pay_name
    console.log(this.newpayment_name);
    
  }
  
  getpaymentdetails(){

    console.log(this.userProfileForm.value);
    this.googlepaydet.push(this.userProfileForm.value)
    this.http.post('http://localhost/phprestAPI/sirajkart_payment.php', this.googlepaydet ).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
