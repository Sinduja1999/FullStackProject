import { Component } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(public loginService:AuthenticationserviceService,private router:Router){}
  ngOnInit(){

  }
  contactus(){
    var status=confirm("Thanks for Contacting Us We Will Reach You Again");
    if(status==true){
      this.router.navigate(['busDetails'])
    }
  }

}
