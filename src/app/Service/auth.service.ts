import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isMatch(){
    let ruser=JSON.parse(localStorage.getItem("reguser")) 
    let rpass=JSON.parse(localStorage.getItem("regpass")) 
    let luser=JSON.parse(localStorage.getItem("loginuser")) 
    let lpass=JSON.parse(localStorage.getItem("loginpass"))
    if(ruser===luser && rpass===lpass && ruser!=null && luser!=null && rpass!=null && lpass!=null){
      return true
    }else if((ruser=null) && (luser=null) && (rpass=null) && (lpass=null)){
      return false
    }else{
      return false
    } 
  }
  constructor() { }
}
