import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }
  canAccess(){
    if(!this.isAuthenticated()){
      //redirect to login
      this.router.navigate(["/login"]);
    }
  }
  canAuthenticate(){
    if(this.isAuthenticated()){
      //redirect to login
      this.router.navigate(["/products"]);
    }
  }

  register(name:string,email:string,password:string){
    //send data to api (firebase )
    return this.http
    .post<{idToken:string}>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF6RG6KjuC81DFxCUR61EWYJDx4jIZvq4',
      {displayName:name,email:email,password:password}
      );
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }

  login(email:string,password:string){
    return this.http
    .post<{idToken:string}>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF6RG6KjuC81DFxCUR61EWYJDx4jIZvq4',
        {email:email,password:password}
    );
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }
 
}
