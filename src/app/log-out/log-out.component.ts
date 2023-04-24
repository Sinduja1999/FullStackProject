import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(
    private authentocationService: AuthenticationserviceService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['app-contact-us']);
    

    
    
  }

}



