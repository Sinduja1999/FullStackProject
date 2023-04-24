import { Component } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent {
  constructor(public loginService:AuthenticationserviceService,private router:Router){}
  ngOnInit(){

  }
  feedback(){
    var status=confirm("Thanks for Submitting Your FeedBack");
    if(status==true){
      this.router.navigate(['busDetails'])
    }
  }

}


