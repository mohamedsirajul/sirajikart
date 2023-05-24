import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/_services/auth.service';
import { QuantityComponent } from '../quantity/quantity.component';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any = [];
  // currentVal="";
  currentVal :any;
  public grandTotal !: number ;
  public grandid !: any ;
  public grandquantity !: any ;
  quantity: any;
  id=3
  tempval:any;

  temp_id: any;
  temp_name:any;

  evt: any;
  new_val: any;
  pro: any;
  actualdata: any;
  data: any;
  value: any;
  qty: any;
  vie: any;
  constructor(private cartService : CartService,public SVC:DataserviceService,
    dialog: MatDialog, private auth:AuthService, private router: Router,    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.auth.canAccess();

    this.cartService.getProducts()
    .subscribe(res=>{
      this.pro = res
      for (let i=0;i< res.length; i++)
      this.temp_id = res[i].id
      console.log(this.temp_id)
      console.log(this.pro)
      
      this.SVC.cartarr = this.pro;
      this.SVC.finaltotalval = this.grandTotal


      res = this.vie
      
      this.grandTotal = this.cartService.getTotalPrice();
      this.grandid = this.cartService.getid()

      console.log(this.grandTotal)
      console.log(this.grandid)
      
      // this.http.post('http://localhost/phprestAPI/insert.php', this.pro).subscribe(
      //   (response) => console.log(response),
      //   (error) => console.log(error)
      // );

      
      
      // this.http.post('http://localhost/phprestAPI/insert.php', JSON.stringify({totdata:this.pro})).subscribe(
      //   (response) => console.log(response),
      //   (error) => console.log(error)
      // );
    //   for (let i = 0; i < this.pro.length; i++) {
    //     if (this.pro == this.currentVal.id) {
    //       this.pro.quantity = this.currentVal.quantity;
    //       this.pro[i].amount = this.pro[i].quantity * this.pro[i].price
    // console.log(this.pro[i].quantity)
      
    //     }
    //   }
      
    })
  
   
  
  }
  isDisplay=false;
  
  changeName(event: Event) {
    this.quantity=Number(
      (<HTMLInputElement>event.target).value
    );

  }
 

  myEvent(evt:any){

    this.tempval={id:this.data['id'],quantity:this.quantity}
      console.log(this.tempval)
      this.isDisplay = !this.isDisplay;

        }

 
  
  addtocart(item: any ){
    this.cartService.addtoCart(item);
    

   
   
   }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
   }
   emptycart(){
     this.cartService.removeAllCart();
  }
}
