import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bus-details-list',
  templateUrl: './bus-details-list.component.html',
  styleUrls: ['./bus-details-list.component.css']
})

/* Here we are implementing ng onit method for view by id and it moves  to get busdetails by id 
ng onitmethod pass default constructor */

export class BusDetailsListComponent implements OnInit {
  busDetails: BusDetails[] = [];
  startingPoint: String = "";
  busId : number=0;
  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }

  ngOnInit(): void {
    this.getBusDetails();
  }

  private getBusDetails(){
    this.busDetailsService.getBusDetailsList().subscribe(data => {
      this.busDetails = data;

    });
  }

  BusDetails(busId: number){
    this.router.navigate(['busDetails', busId]);
  }

  updateBusDetails(busId: number){
    this.router.navigate(['updateBusDetails', busId]);
  }

  deleteBusDetails(busId: number){
    this.busDetailsService.deleteBusDetails(busId).subscribe( data => {
      console.log(data);
      this.getBusDetails();
    })
  }
 confirmDelete(busDetails:BusDetails){
    var status= confirm("Are You Sure want to delete this record?");
     if (status==true) {
       this.deleteBusDetails(busDetails.busId);
          }
     else{
      this.getBusDetails();
     }
      
}

bookTickets(busDetails:BusDetails){
  console.log(busDetails);
  this.router.navigate(['app-bus-seats', busDetails.busId]);
}
    removeAllbusDetails(): void{

      this.busDetailsService.deleteAll().subscribe(
        data=> {
          console.log(data);
          this.getBusDetails();
        },
        (error: any) => {
          console.log(error);
        });
    }
  
    searchBystartingPoint(){
      this.busDetailsService.findBystartingPoint(this.startingPoint).subscribe(data=>{
        this.busDetails=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
      );
      
    }
  
    fetchAcBus(){
      this.busDetailsService.findByAcBus().subscribe(
        data => {
          this.busDetails = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    fetchNonAcBus(){
      this.busDetailsService.findByNonAcBus().subscribe(
        data => {
          this.busDetails = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
 
}
    
  
  
  
  
