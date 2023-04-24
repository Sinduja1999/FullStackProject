import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
username = '';
password = '';
invalidLogin = false;
message: string | undefined;
  

constructor(private router: Router,
  private loginservice: AuthenticationserviceService){}

  ngOnInit() {
    console.log('login triggered..')
     }
     checkLogin(){
      if(this.loginservice.authenticate(this.username,this.password)){
        this.router.navigate(['busDetails']);
        console.log("navigate...");
        this.invalidLogin = false;
      }
      else 
      this.invalidLogin = true;
      this.message = 'Enter corret credential';
     }
} 


