import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Username = "";
  email = "";
  Password = "";
  Retypepassword = "";
  constructor(private router: Router,
    private loginservice: AuthenticationserviceService){}
ngOnInit(){
}
checkPassword(){
  if(this.Username === ''|| this.email === '' ||  this.Password ==='' || this.Retypepassword === ''){
    var status = confirm("It is mandatory to fill all the fields");
  }
  else{
  var status = confirm("Successfully SignUp");
  if(status==true){
    this.router.navigate(['app-login']);
  }
}
}
}
