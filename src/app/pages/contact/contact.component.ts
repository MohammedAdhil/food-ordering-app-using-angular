import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  alertContact() {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thank You For Contacting Us',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
