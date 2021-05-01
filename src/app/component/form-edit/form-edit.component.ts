import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Contact from 'src/app/interfaces/contact.interface';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  contact : any = {
    id : 0,
    nombre : "",
    apellido : "",
    telefono : ""
  }

  message : any = {
    message : ""
  }

  constructor(  
    private contactservice : ContactsService,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.contactservice.getContact(params.id)
        .subscribe(
          res  => {
            console.log(res);
            this.contact = res;
          },
          err => console.log(err)
        )
    }
  }

  updateContact() {
    const params = this.activatedRoute.snapshot.params;
    this.contactservice.putContact(this.contact, params.id)
      .subscribe(
        res => { 
          this.message = res;
          alert(this.message.message);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      )
  }

}
