import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-logiiiin',
  templateUrl: './logiiiin.component.html',
  styleUrls: ['./logiiiin.component.css']
})
export class LogiiiinComponent implements OnInit {
  hide = true;
  formdata = {email:"",password:""};
  submit=false;
  loading=false;
  errorMessage="";
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();

  }


  onSubmit(){
    this.loading=true;
    this.auth.login(this.formdata.email,this.formdata.password)
    .subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken);
        console.log('logged user tocken is'+ data.idToken)
        this.auth.canAuthenticate();

      },
      error:data=>{
        if(data.error.error.message=="INVALID_PASSWORD" ||  data.error.error.message=="INVALID_EMAIL"){
          this.errorMessage = "Invalid Credentials!";
        }
        else{
          this.errorMessage = "Unknown error when logging into this account"
        }
      }
    }).add(()=>{
      this.loading = false;
      console.log('login process completed')
    })
  }
}
