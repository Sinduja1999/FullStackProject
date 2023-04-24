import { Component,OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-bus-info',
  templateUrl: './bus-info.component.html',
  styleUrls: ['./bus-info.component.css']
})
export class BusInfoComponent implements OnInit {
  busId: number = 0;
  busDetails: any = [];
  
  constructor(private route: ActivatedRoute, private busDetailsService: BusDetailsService,private router:Router) { }

  ngOnInit(): void {
    this.busId= this.route.snapshot.params['busId'];

    this.busDetails = new BusDetails();
    this.busDetailsService.getBusDetailsById(this.busId).subscribe( data => {
      this.busDetails= data;
    }); 
    
    
  }
  
  PressBack(){
    var status= confirm("Are You Sure want to go Back");
    if (status==true) {
    this.router.navigate(['busDetails'])
  }
  else{
    this.router.navigate(['app-log-out'])
  }
  
}
}
