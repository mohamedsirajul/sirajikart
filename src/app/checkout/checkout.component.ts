import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class CheckoutComponent implements OnInit {



  public userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
  })
  userdet:any[] = [];
  newcartarr: any[] = [];
  payment_name: any;
  seasons: string[] = ['google pay', 'phone pay', 'cash on delivary'];
  lastdata: any[] = [];
  lastuserdata: any[] = [];

  finid :any;
  finname :any;
  finprice :any;
  finquantity :any;
  fintotal :any;
  product_array: any;
  totproductval: any;
  finusername: any;
  tempstore_data: any;
  // public userProfileForm = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),
  // });

  constructor(private cartService : CartService ,private _formBuilder: FormBuilder,private router: Router, private http: HttpClient,private dataservice: DataserviceService, public SVC:DataserviceService,) { }

  ngOnInit(): void {

    this.newcartarr = this.dataservice.cartarr 
    
    this.totproductval = this.cartService.getTotalPrice();

   console.log(this.totproductval);
  
    

    for (let i = 0; i < this.newcartarr.length; i++) {
      this.lastdata[i] = {id:this.newcartarr[i].id,name:this.newcartarr[i].title,prize:this.newcartarr[i].price,quantity:this.newcartarr[i].quantity,total:this.newcartarr[i].total, finaltot:this.totproductval}
    
      this.finid = this.lastdata[i].id
      this.finname = this.lastdata[i].name
      this.finprice = this.lastdata[i].prize
      this.finquantity = this.lastdata[i].quantity
      this.fintotal = this.lastdata[i].total

      console.log(this.lastdata[i]);
       this.tempstore_data = this.lastdata[i]
    }
    console.log(this.tempstore_data);

  }
 
  
    
  // payclick(){
  //   if(this.seasons[0]){
  //     this.router.navigate(['/googlepay'])
  //   }
  //   else{

  //   }
  // }
  print_bill() {



    this.userdet.push(this.userProfileForm.value)
    console.log(this.userdet);
    
    for (let i = 0; i < this.userdet.length; i++) {
      this.lastuserdata[i] = {username:this.userdet[i].name,useraddress:this.userdet[i].address,userpaymethod:this.userdet[i].payment,useremail:this.userdet[i].email,usermobile:this.userdet[i].mobile}

      console.log(this.lastuserdata[i].usermobile);
      this.finusername = this.lastuserdata[i].username
      

    }


    this.http.post('http://localhost/phprestAPI/sirajkart.php', this.userdet).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    

    this.http.post('http://localhost/phprestAPI/sirajkart_product.php',this.tempstore_data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    let username: any = this.userProfileForm.value.name;

    let paymentmethod: any = this.userProfileForm.value.payment;
    let prototamount: any = this.fintotal;
    let proprice: any = this.finprice;
    let proname: any = this.finname;
    let proquantity: any = this.finquantity;

    let print: any = this.lastdata;
    // console.log(this.table);
    // this.rupees = '₹';
    // this.GST = '5.00';
    // this.new_gst = this.GST / 2;

    // this.gst = (this.tot_amt * 5) / 100;
    // console.log(this.gst);
    //  this.GST=this.GST/2;
    //  console.log(this.GST)
    // let printContents,
    //   popupWin: Window | any,
    //   name_string,
    //   name,
    //   quantity_string,
    //   quantity,
    //   price_string,
    //   price,
    //   amount_string,
    //   amount
    ;

    let printContents, popupWin: Window | any,   name_string,
      name,
      uname,
      quantity_string,
      quantity,
      price_string,
      price,
      uname_string,
      amount_string,
      amount, pro_string, pro:any, pro_new;
    this.product_array = this.lastdata;
    if (this.product_array.length > 0) {
      let temp_name = [];
      // console.log(this.product_array)
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['name'] = this.product_array[i]['name'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_name.push(this.product_array[i]['name']);
        
      }

      // console.log(this.product_array)
      name_string = temp_name.toString();
      console.log(name_string);
      name = name_string.replaceAll(',', '<br>');

      let temp_uname = [];
      // console.log(this.product_array)
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['name'] = this.product_array[i]['name'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_uname.push(this.product_array[i]['name']);
        console.log(temp_uname);
        
      }

      // console.log(this.product_array)
      uname_string = temp_uname.toString();
      console.log(uname_string);
      username = uname_string.replaceAll(',', '<br>');

      let temp_quantity = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['quantity'] = this.product_array[i]['quantity'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_quantity.push(this.product_array[i]['quantity']);
      }

      quantity_string = temp_quantity.toString();
      console.log(quantity_string);
      quantity = quantity_string.replaceAll(',', '<br>');

      let temp_price = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['prize'] = this.product_array[i]['prize'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_price.push(this.product_array[i]['prize']);
      }

      price_string = temp_price.toString();
      console.log(price_string);
      price = price_string.replaceAll(',', '<br>');

      let temp_amount = [];
      for (let i = 0; i < this.product_array.length; i++) {
        this.product_array[i]['total'] = this.product_array[i]['total'];
      }

      for (let i = 0; i < this.product_array.length; i++) {
        temp_amount.push(this.product_array[i]['total']);
      }

      amount_string = temp_amount.toString();
      console.log(amount_string);
      amount = amount_string.replaceAll(',', '<br>');

      // pro.replaceAll(' aj ', '<br>');
      // pro_new=pro.replaceAll('aj','<br>')
      popupWin = window.open(
        '',
        '_blank',
        'top=0,left=0,height=auto,width=auto'
      );
      popupWin.document.open();
      popupWin.document.write(`
  <html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
@page { size: 72mm 120mm }
body.receipt .sheet { width: 120mm; height: 100mm }
@media print {
  body.receipt {
     width: 120mm
    
  } 
} 
    
 
  .tab{
    margin-bottom: -20px;

  }
  .header{
    margin-right:170px;
  }
 
  .hotel{
    font-size: 25px;
    text-align:center;
    margin-bottom: -16px;
  }
  .place{
    font-size: 15px;
    font-weight: 23px;
    margin-bottom: -16px;

    text-align:center;        
  }
  
  .phone{
    font-weight: 23px;
    font-size: 15px;
          text-align:center;        

  }
  .waiter{
    font-size: 15px;

  }
  
  .table{
    font-size: 15px;
    margin-left:114px;      
  }
  .date{
    font-size: 15px;
    margin-top: -33px;

  }
  .time{
    font-size: 15px;
    margin-left:185px; 
  }

  hr{
      border: none;
      border-top: 1px dashed;
      width: 100%;
  }
  .pro{
    font-size:17px;
    text-align:center;
    margin-left:5px;
  }
  .tab{
    
  }
  .total{
    font-size:20px;
    font-weight: bolder;
    margin-left:105px;
    hight:20px;
  }
  .quantity{
    margin-left:10px;
  }
  .amount{
    margin-left:10px;
  
  }
  .price{
    margin-right:20px;
    font-size:20px;


  }
  .name{
    margin-right:12px;
    font-size:12px;

  }
  td{
    font-size:10px;
    text-align:center;
  }
  

.gst{
  font-size: 12px;
  margin-left:15px;
}
.tabl{
  font-size:12px;
  margin-left:14px;
  
}

</style>
</head>
<body class="receipt"  onload="window.print();window.close()">
<div class="header">
<p class="hotel">Easy Buy</p>
<P class="place">NO3,SOUTH STREET,PATEMANAGARAM</P>
<p class="phone">8056457791  ;  9976040756</p>
<table class="tab">
    <tr>
        <td>
<p class="waiter">NAME:${this.finusername}</p></td>
</tr>
</table>
<br>
<br>

<hr>
<table class="pro">
<tr>
<td >
<p class="name">
Name
</p>
<hr>
</td>
<td>
<p class="tabl">
Quantity
</p>
<hr>
</td>
<td>
<p class="tabl">
Price
</p>
<hr>
</td>
<td>
<p class="tabl">
Amount
</p>
<hr>
</td>
</tr>
<tr>
<td >
<p class:"name">
${name}
</p>
</td>
<td >
<p class:"quantity" >
${quantity}
</p>
</td>
<td >
<p class:"price">
${price}
</p>
</td>
<td >
<p class:"amount">
${amount}
</p>
</td>
</table>

<hr>

<p class="total">RS:${this.totproductval}.00</p></td>

<br>
<hr>


</body>
</html>`);

      popupWin.document.close();
    } else {
      alert("error")
    }
  }
  getvalue(cname:string,caddress:string){
    console.log(cname);
    console.log(caddress);

  }
  paybutt(){
    console.log(this.userProfileForm.value);
    this.payment_name = this.userProfileForm.value.payment
    this.SVC.pay_name = this.payment_name;
  }

}
