import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import {MatDialog} from '@angular/material/dialog';
import { QuantityComponent } from '../quantity/quantity.component';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource = new MatTableDataSource([]);
  public productList: any;
  public filterCategory :any
  searchkey:string ="";
  temp_id: any;
  data: never[] | undefined;
  constructor(private api : ApiService, private cartService :CartService,public dialog: MatDialog, public auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      for (let i=0;i< res.length; i++)
      this.temp_id = res[i].id
      console.log(this.temp_id)
      console.log(res)
      this.filterCategory = res;

      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === 
        "men's clothing"){
        a.category ==="fashion"
      }
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList)

    });
    
    this.cartService.search.subscribe((val:any)=>{
      this.searchkey = val;
    })


    this.auth.canAccess();

  }

addtocart(item: any ){
 this.cartService.addtoCart(item);
 let temp_id
 let newval

 this.openDialog(temp_id,newval )





}
click(){
      
  this.router.navigate(['/Users/DELL/sirajKart/eye_controlled_mouse/main.py']);
}
openDialog( temp_id:any,newval:any) {
  const dialogRef = this.dialog.open(QuantityComponent, {
    data: { id:newval},
    disableClose:true
  });

  dialogRef.afterClosed().subscribe(result => {
    
  // this.productList=this.productList.reduce((a: any[],b: { name: any; })=>{
  //   if(!a.find(data=>data.name===b.name)){
  //     a.push(b);
  //   }
  //   return a;
  // },[]);


  this.dataSource = new MatTableDataSource(this.data);
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == result.id) {
        this.productList[i].quantity = result.quantity;
        this.productList[i].total = this.productList[i].quantity * this.productList[i].price
      }
    }

  
    console.log(result);
  });
}

 filter(category:string){
 this.filterCategory = this.productList
 .filter((a:any)=>{
  if(a.category == category || category==''){
    return a;
  }
  })

  }
}