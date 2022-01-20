import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

   ruser=JSON.parse(localStorage.getItem("reguser")) 
   rpass=JSON.parse(localStorage.getItem("regpass")) 
   luser=JSON.parse(localStorage.getItem("loginuser")) 
   lpass=JSON.parse(localStorage.getItem("loginpass"))


  constructor() { }

  ngOnInit(): void {
  }

}
