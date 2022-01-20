import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    luser:new FormControl("",[Validators.required,Validators.minLength(5)]),
    lpass:new FormControl("",[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/)])
  })

  get luser(){
    return this.loginForm.get("luser")
  }
  get lpass(){
    return this.loginForm.get("lpass")
  }
  constructor(private route:Router) { }
  getData(){
    
    localStorage.setItem("loginuser",JSON.stringify(this.loginForm.value.luser))
    localStorage.setItem("loginpass",JSON.stringify(this.loginForm.value.lpass))

    let ruser=JSON.parse(localStorage.getItem("reguser")) 
    let rpass=JSON.parse(localStorage.getItem("regpass")) 
    let luser=JSON.parse(localStorage.getItem("loginuser")) 
    let lpass=JSON.parse(localStorage.getItem("loginpass"))

    if(ruser===luser && rpass===lpass){
      this.route.navigate(["dashboard"])
    }else {
      window.alert("Login credentials are not matching")
      return false
    }    
  }
  
  

  ngOnInit(): void {
  }

}
