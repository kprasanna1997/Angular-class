import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authguard:AuthService){}
  canActivate(){
   if(this.authguard.isMatch()){
     window.alert("Now you can navigate to User dashboard")
     return true
   }else{
     window.alert("First complete Registration and Login")
     return false;
   }
  }
    
  
  
}
