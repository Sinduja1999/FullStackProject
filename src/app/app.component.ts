import { Component } from '@angular/core';
import { AuthenticationserviceService } from './authenticationservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* App component is the head component of all sub components. here we are giving the title of our project*/
export class AppComponent {
  title = 'Sky Bus';
  router: any;
  constructor(public loginservice:AuthenticationserviceService) { }
  ngOnInit() {
    
  }
   /* these method is used to confirm logout by user */
  confirmLogout(){
    var status= confirm("Are You Sure want to LogOut?");
     if (status==true) {
      this.router.navigate(['app-logout']);
       
     }
     else{
      this.router.navigate(['app-login']);
     }
  
    }
    

  }
