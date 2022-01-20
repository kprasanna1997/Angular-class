import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router) { }

  regForm = new FormGroup({
    ruser: new FormControl("", [Validators.required, Validators.minLength(5)]),
    rpass: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/)])
  })

  get ruser() {
    return this.regForm.get("ruser")
  }
  get rpass() {
    return this.regForm.get("rpass")
  }

  addData() {
    // console.log(this.regForm.value.ruser);
    // console.log(this.regForm.value);
    localStorage.setItem("reguser", JSON.stringify(this.regForm.value.ruser))
    localStorage.setItem("regpass", JSON.stringify(this.regForm.value.rpass))
    let ruser = JSON.parse(localStorage.getItem("reguser"))
    let rpass = JSON.parse(localStorage.getItem("regpass"))
    if (ruser && rpass) {
      this.route.navigate(["login"])
    }else {
      return false
    }
  }


  ngOnInit(): void {
  }

}
