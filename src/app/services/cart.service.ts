import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  temp_name : any =[];
  temp_id: any;
  temp_price: any;
  temp_amt: any;
  
  constructor() { }
  getProducts(){
    return this.productList.asObservable()
    
    
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    
  }
  addtoCart(product : any ){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
   
    this.temp_id = product.id
    console.log(this.temp_id)
    
  }

  
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    console.log(grandTotal)
    return grandTotal;
  }
  getid(): number{
    let grandid = 0;
    this.cartItemList.map((a:any)=>{
      grandid = a.id;
    })
    console.log(grandid)
    return grandid;
  }
  // getprice(): number{
  //   let grandprice = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandprice = a.price;
  //   })
  //   console.log(grandprice)
  //   return grandprice;
  // }
  // getamt(): number{
  //   let grandamt = 0;
  //   this.cartItemList.map((a:any)=>{
  //     grandamt = a.amt;
  //   })
  //   console.log(grandamt)
  //   return grandamt;
  // }
  removeCartItem(product: any){
  this.cartItemList.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.cartItemList.splice(index,1);
    }
  })
  this.productList.next(this.cartItemList);
}
removeAllCart(){
  this.cartItemList = []
  this.productList.next(this.cartItemList);
}

}
