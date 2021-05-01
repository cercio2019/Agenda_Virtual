import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

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
    ) { }
    
  ngOnInit(): void {
   
  }

  saveContact = () =>{  
    this.contactservice.postContact(this.contact).subscribe(
      res => {
        this.message = res;
        alert(this.message.message);
        this.router.navigate(["/"]);
      }
    )
  }

}
