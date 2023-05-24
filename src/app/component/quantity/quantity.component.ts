import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  quantity: any;
  id=3
  tempval:any;
  currentVal="";
  grandTotal: any;
  grandid: any;
  temp_id: any;
  pro: any;
  constructor(private cartService : CartService, public dialogRef: MatDialogRef<QuantityComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.pro = res
      for (let i=0;i< res.length; i++)
      this.temp_id = res[i].id
      console.log(this.temp_id)
      console.log(res)
      
      
      this.grandTotal = this.cartService.getTotalPrice();
      this.grandid = this.cartService.getid()
      
      console.log(this.grandTotal)
      console.log(this.grandid)
      
      
    })
  }
  // isDisplay=false;
  
  changeName(event: Event) {
    this.quantity=Number(
      (<HTMLInputElement>event.target).value
    );

  }
  myEvent(evt:any){

  //  console.log(evt)
  //  this.currentVal=evt
  //  this.isDisplay = !this.isDisplay;
  if(this.quantity>0) {
    this.tempval={id:this.temp_id,quantity:this.quantity}
    this.dialogRef.close(this.tempval);
  }
  }
//   getVal(evt:any){

// console.warn(evt)
// this.currentVal=evt

//     }
  }

