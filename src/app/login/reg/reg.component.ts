import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  formdata = {name:"",email:"",password:""};
  regdetails:any[] = [];
  submit=false;
  errorMessage="";
  loading=false;
  constructor(private auth:AuthService,private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();

  }
  onSubmit(){
    this.loading=true;

    this.regdetails.push(this.formdata);
    console.log(this.regdetails);

    this.http.post('http://localhost/phprestAPI/sirajkart_user.php', this.regdetails).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    
    //call register service
    this.auth
    .register(this.formdata.name,this.formdata.email,this.formdata.password)
    .subscribe({
      next:data=>{
        //store token form response data
        this.auth.storeToken(data.idToken);
        console.log('Registered idtoken is '+data.idToken)
        // this.auth.canAuthenticate();
      },
      error:data=>{
        if(data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Email";
        }
        else if (data.error.error.message=="EMAIL_EXISTS"){
          this.errorMessage = "Already Email Exists!";
        }
        else{
          this.errorMessage = "Unknown error occured when creating this account!";
        }
      }
    }).add(()=>{
      this.loading = false;
       console.log('Register Process Completed!')
       this.router.navigate(["/login"]);
      })
  }

}
