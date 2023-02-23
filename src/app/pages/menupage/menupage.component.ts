import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
     this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      })
    }
  }

  alertConfirmation() {
    Swal.fire({
  
      // text: 'This process is irreversible.',
      // icon: 'warning',
      // title: "An input!",
      // text: "Enter your details and address :",
      // input: 'text',
      // inputPlaceholder: 'Enter Your Address',
      html:
    '<input id="swal-input1" class="swal2-input" placeholder="Enter Your Name">' +
    '<input id="swal-input2" class="swal2-input" placeholder="Enter Your Phone Number">'+
    '<input id="swal-input1" class="swal2-input" placeholder="Enter Your Address">' ,

      // text: "Write something interesting:",
      // input: 'text',


      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Order Placed!', 'Product ordered successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Order has been cancelled.', 'error');
      }
    });
  }

}
