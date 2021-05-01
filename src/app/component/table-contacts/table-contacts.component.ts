import { Component,  OnInit } from '@angular/core';
import { ContactsService } from '../../service/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-contacts',
  templateUrl: './table-contacts.component.html',
  styleUrls: ['./table-contacts.component.css']
})
export class TableContactsComponent implements OnInit {

  contacts : any  = [];

  message : any = {
    message : ""
  }

  constructor(private contactservice : ContactsService,
      private router : Router
    ){

  }

  ngOnInit() {
    this.renderContact();  
  }

  renderContact = () =>{
    this.contactservice.getContacts()
    .subscribe(
      res =>{
        const resultados = res;
        this.contacts = resultados;
        console.log(this.contacts);
      },

      error => console.log(error)
    )
  }

  deleteContact = (id:String | Number) =>{

    if(confirm("Desea realmente eliminar este contacto") == true){
      this.contactservice.deleteContact(id).subscribe(
        res =>{
          this.message = res;
          alert(this.message.message);
          this.renderContact();
        },
        err => console.log(err)
      )
    }
  }
}
