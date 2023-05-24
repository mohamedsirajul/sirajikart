import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-phonepay',
  templateUrl: './phonepay.component.html',
  styleUrls: ['./phonepay.component.css']
})
export class PhonepayComponent implements OnInit {
  phonepaydet:any[] = [];
  newpayment_name:any[]= [];

  public userProfileForm = new FormGroup({
    cnumber: new FormControl('', Validators.required),
    cvvcode: new FormControl('', Validators.required),
    cvalidatedate: new FormControl('', Validators.required),
    cpayment_mode: new FormControl(this.newpayment_name),

  })
  constructor(private http: HttpClient,private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.newpayment_name = this.dataservice.pay_name
    console.log(this.newpayment_name);
  }
  getpaymentdetails(){
    console.log(this.userProfileForm.value);
    this.phonepaydet.push(this.userProfileForm.value)

    this.http.post('http://localhost/phprestAPI/sirajkart_payment.php',this.phonepaydet).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

    
}
